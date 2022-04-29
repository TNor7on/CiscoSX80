import xapi from 'xapi';

/* 
We need to declare the following variables
• the WATT_USERNAMEPWD encoded string. cleartext format is Username:Password - this then has to be base64 encoded.
    the username/password combination should be set in the web ui of your wattbox. ensure the account type is user. aka permitted to use the API but not to make changes in the admin panel/web ui. 
• the WATT_AUTHTOKEN - this is a combination of declaring the autorization type and then suppling the corresponding key in the appropriate format.
    in our case here our auth type is basic and the "key" is generated as previously described
• CONNECTION_TYPE - in a legitimate request to an http server this would be slightly more complex, We're just using here it to tell the wattbox to keep us (the codec) authorized to interact with the API instead of creating a new "session" each and every time.
    Note to self: might have to change variable type if I end up controlling multiple wattboxes with one codec - that's probably going to be the case so I need to cover the possibilty as soon as I get a litte extra time.
*/

const WATT_USERNAMEPWD = 'INSERT YOUR HASHED VALUE HERE';
const WATT_AUTHTOKEN = "Authorization: Basic " + WATT_USERNAMEPWD;
const CONNECTION_TYPE = "Connection: keep-alive";
const VarTargetIp =  "INSERT THE IP OF YOUR WATTBOX HERE";
let colorStatus;

//Next we programatically create the user interface elements

//Create a button.
xapi.command('UserInterface Extensions Panel Save', {PanelId: 'Power_Control_Button'},
`<Extensions>
<Version>1.4</Version>
<Panel>
  <Type>Statusbar</Type>
  <Icon>${'Lightbulb'}</Icon>
  <Order>1</Order>
  <Color>${'#FFD700'}</Color>
  <Name>${'Power Control'}</Name>
  <ActivityType>Custom</ActivityType>
</Panel>
</Extensions>`
);

function DrawPowerPanel(VarTargetColor)
{
  let ccolor;
  if (VarTargetColor === 'green') {
    ccolor = '<Widget><WidgetId>Video_Wall_Counter</WidgetId><Type>Button</Type><Options>size=1;icon=green</Options></Widget>'
    colorStatus = 'green'
  }
  else{
    ccolor = '<Widget><WidgetId>Video_Wall_Counter</WidgetId><Type>Button</Type><Options>size=1;icon=red</Options></Widget>'
    colorStatus = 'red'
  }
xapi.command('UserInterface Extensions Panel Save', {
    
  PanelId: 'Power_Control_Panel'
}, `<Extensions>
  <Version>1.8</Version>
  <Panel>
    <Order>2</Order>
    <PanelId>Power_Control_Panel</PanelId>
    <Origin>local</Origin>
    <Type>Never</Type>
    <Icon>Lightbulb</Icon>
    <Name>Power Control Panel</Name>
    <ActivityType>Custom</ActivityType>
    <Page>
      <Name>Power Control</Name>
      <Row>
        <Name>Row</Name>
        <Widget>
          <WidgetId>Video_Wall_Button</WidgetId>
          <Type>Button</Type>
          <Options>size=1;icon=power</Options>
        </Widget>
        <Widget>
          <WidgetId>Video_Wall_Text</WidgetId>
          <Name>Video Wall</Name>
          <Type>Text</Type>
          <Options>size=2;fontSize=normal;align=center</Options>
        </Widget>
        ${ccolor}
      </Row>
      <Options>hideRowNames=1</Options>
    </Page>
  </Panel>
</Extensions>`
);
}

//Now let's declare our function. It takes two arguements, which outlet(s) to switch - in format "1" or "1,2,3" etc and state. either "On" or... anything else. to make it look nice we'll go with "off" but to save lines it work also turn the outlet off if you supplied "tomato".

function SendAPIRequest(VarTargetOutlet,VarState)
{
  //Translates Human readable "On" and "Off" to the state codes specified in the Wattbox API.
  /* Other options not covered in this program are
  3 - power reset
  4 - autoreboot on
  5 - autoreboot off
  There is no "2"
  */

  if (VarState == "On")
    {var VarCommand = "1";} else {var VarCommand = "0";}

  //This next statement concatenates all the variables into a legitimate web address.
  var TargetUrl = "http://" + VarTargetIp + "/control.cgi?outlet=" + VarTargetOutlet + "&command=" + VarCommand;

  //Now we can invoke the codec API command to put it together.
      xapi.command('HttpClient GET',
    {
    Header: [CONNECTION_TYPE, WATT_AUTHTOKEN],
    Url: TargetUrl,
    AllowInsecureHTTPS: "True",
    ResultBody: 'plaintext'
    },
    )
     .then((response) => {
         console.debug(`received response with status code: ${response.StatusCode}`);
     })
}
//Draw Panel at first run
DrawPowerPanel("green");


//finally we wire it all up.
//First have our button launch our panel:

xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
  if (event.PanelId === 'Power_Control_Button') {
 xapi.command('UserInterface Extensions Panel Open', {
    PanelId: 'Power_Control_Panel'
    });
  }});

//then respond to the button press
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
if(event.WidgetId === 'Video_Wall_Button' && event.Type == 'pressed' && colorStatus == 'green'){
  SendAPIRequest("0","Off");
  DrawPowerPanel("red");
}
else if(event.WidgetId === 'Video_Wall_Button' && event.Type == 'pressed' && colorStatus == 'red'){
  SendAPIRequest("0","On");
  DrawPowerPanel("green");

}
});

//lastly kill the video wall if the room goes into standby
xapi.status.on('Standby State', state => {
    if (state === 'Standby') {
      DrawPowerPanel("red");
      SendAPIRequest("0","Off")
    } else {
      DrawPowerPanel("green");
      SendAPIRequest("0","On")
    }
});
