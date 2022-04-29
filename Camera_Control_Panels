import xapi from 'xapi';

const CAMERAID_CAMERA_LEFT = 1;
const CAMERAID_CAMERA_RIGHT = 2;
const CAMERACONNECTORID_CAMERA_LEFT = 1;
const CAMERACONNECTORID_CAMERA_RIGHT = 3;

let camera1active = false;
let camera2active = false;

//Draw the button.
xapi.command('UserInterface Extensions Panel Save', {PanelId: 'Camera_Control_Button'},
  `<Extensions>
  <Version>1.4</Version>
  <Panel>
  <Type>Statusbar</Type>
  <Icon>${'Camera'}</Icon>
  <Order>1</Order>
  <Color>${'#2d8bff'}</Color>
  <Name>${'Cameras and Mics'}</Name>
  <ActivityType>Custom</ActivityType>
  </Panel>
  </Extensions>`
);

function DrawCameraPanel(VarCameraOn)
{
  let camOneColor;
  let camTwoColor;
  let camDualColor;

  if (VarCameraOn == 'one') {
    camOneColor = `
      <Widget>
      <WidgetId>cam_one_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=green</Options>
      </Widget>`;
    camTwoColor = `<Widget>
      <WidgetId>cam_two_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    camDualColor = `<Widget>
      <WidgetId>cam_dual_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
  }
  else if (VarCameraOn == 'two') {
    camOneColor = `
      <Widget>
      <WidgetId>cam_one_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    camTwoColor = `
      <Widget>
      <WidgetId>cam_two_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=green</Options>
      </Widget>`;
    camDualColor =`
      <Widget>
      <WidgetId>cam_dual_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
  }
    else if (VarCameraOn == 'both') {
    camOneColor =`
      <Widget>
      <WidgetId>cam_one_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    camTwoColor =`
      <Widget>
      <WidgetId>cam_two_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    camDualColor = `
      <Widget>
      <WidgetId>cam_dual_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=green</Options>
      </Widget>`;
  }
      else if (VarCameraOn == 'off') {
    camOneColor =`
      <Widget>
      <WidgetId>cam_one_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    camTwoColor =`
      <Widget>
      <WidgetId>cam_two_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    camDualColor =`
      <Widget>
      <WidgetId>cam_dual_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
  }
  //Draw the camera panel
  xapi.command('UserInterface Extensions Panel Save', {PanelId: 'Camera_Control_Panel'}, 
    `<Extensions>
    <Version>1.8</Version>
    <Panel>
    <Order>4</Order>
    <PanelId>Camera_Control_Panel</PanelId>
    <Origin>local</Origin>
    <Type>Never</Type>
    <Icon>Camera</Icon>
    <Color>#1170CF</Color>
    <Name>Camera Control Panel</Name>
    <ActivityType>Custom</ActivityType>
    <Page>
    <Name>Camera Control Panel</Name>
    <Row>
    <Name>Row</Name>
    <Widget>
    <WidgetId>camera_1</WidgetId>
    <Name>Camera One</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    ${camOneColor}
    <Widget>
    <WidgetId>camera_2</WidgetId>
    <Name>Camera Two</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    ${camTwoColor}
    <Widget>
    <WidgetId>camera_3</WidgetId>
    <Name>Dual Cameras</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    ${camDualColor}
    </Row>
    <Row>
    <Name>Row</Name>
    <Widget>
    <WidgetId>camera_control_widget</WidgetId>
    <Name>Home</Name>
    <Type>DirectionalPad</Type>
    <Options>size=4</Options>
    </Widget>
    </Row>
    <Row>
    <Name>Row</Name>
    <Widget>
    <WidgetId>preset_menu_button</WidgetId>
    <Name>Presets</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    <Widget>
    <WidgetId>pip_menu_button</WidgetId>
    <Name>Picture-in-Picture</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    </Row>
<Row>
        <Name>Row</Name>
        <Widget>
          <WidgetId>zoom_widget</WidgetId>
          <Type>Spinner</Type>
          <Options>size=2;style=plusminus</Options>
        </Widget>
      </Row>
    <PageId>Camera Control Panel</PageId>
    <Options>hideRowNames=1</Options>
    </Page>
    </Panel>
    </Extensions>`
  ); 
}

//Draw the Preset Panel
function DrawPresetPanel(VarPresetOn){
  let angleOneColor;
  let angleTwoColor;
  let angleThreeColor;
  let angleFourColor;

  if (VarPresetOn == 'one') {
    angleOneColor = `
      <Widget>
      <WidgetId>angle1_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=green</Options>
      </Widget>`;
    angleTwoColor = `
      <Widget>
      <WidgetId>angle2_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    angleThreeColor = `
      <Widget>
      <WidgetId>angle3_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`
    angleFourColor = `
      <Widget>
      <WidgetId>angle4_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
  }

  if (VarPresetOn == 'two') {
    angleOneColor = `
      <Widget>
      <WidgetId>angle1_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    angleTwoColor = `
      <Widget>
      <WidgetId>angle2_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=green</Options>
      </Widget>`;
    angleThreeColor = `
      <Widget>
      <WidgetId>angle3_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`
    angleFourColor = `
      <Widget>
      <WidgetId>angle4_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
  }

  if (VarPresetOn == 'three') {
    angleOneColor = `
      <Widget>
      <WidgetId>angle1_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    angleTwoColor = `
      <Widget>
      <WidgetId>angle2_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    angleThreeColor = `
      <Widget>
      <WidgetId>angle3_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=green</Options>
      </Widget>`
    angleFourColor = `
      <Widget>
      <WidgetId>angle4_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
  }

  if (VarPresetOn == 'four') {
    angleOneColor = `
      <Widget>
      <WidgetId>angle1_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    angleTwoColor = `
      <Widget>
      <WidgetId>angle2_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    angleThreeColor = `
      <Widget>
      <WidgetId>angle3_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`
    angleFourColor = `
      <Widget>
      <WidgetId>angle4_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=green</Options>
      </Widget>`;
  }

  if (VarPresetOn == 'none') {
    angleOneColor = `
      <Widget>
      <WidgetId>angle1_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    angleTwoColor = `
      <Widget>
      <WidgetId>angle2_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    angleThreeColor = `
      <Widget>
      <WidgetId>angle3_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`
    angleFourColor = `
      <Widget>
      <WidgetId>angle4_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
  }

  xapi.command('UserInterface Extensions Panel Save', {PanelId: 'Camera_Preset_Panel'}, 
    `<Extensions>
    <Version>1.8</Version>
    <Panel>
    <Order>6</Order>
    <PanelId>Camera_Preset_Panel</PanelId>
    <Origin>local</Origin>
    <Type>Never</Type>
    <Icon>Lightbulb</Icon>
    <Name>Camera Preset Panel</Name>
    <ActivityType>Custom</ActivityType>
    <Page>
    <Name>Camera Presets</Name>
    <Row>
    <Name>Row</Name>
    <Widget>
    <WidgetId>camera_angle1</WidgetId>
    <Name>Preset One</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    ${angleOneColor}
    </Row>
    <Row>
    <Name>Row</Name>
    <Widget>
    <WidgetId>camera_angle2</WidgetId>
    <Name>Preset Two</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    ${angleTwoColor}
    </Row>
    <Row>
    <Name>Row</Name>
    <Widget>
    <WidgetId>camera_angle3</WidgetId>
    <Name>Preset Three</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    ${angleThreeColor}
    </Row>
    <Row>
    <Name>Row</Name>
    <Widget>
    <WidgetId>camera_angle4</WidgetId>
    <Name>Preset Four</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    ${angleFourColor}
    </Row>
    <Options>hideRowNames=1</Options>
    </Page>
    </Panel>
    </Extensions>`
  );
}

function DrawPIPPanel (VarPIPOn)
{
  let pipUlColor;
  let pipUrColor;
  let pipLlColor;
  let pipLrColor;
  let selfviewColor;

  if (VarPIPOn == 'ul') {
    pipUlColor = `
      <WidgetId>camera_pip_ul_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=green</Options>
      </Widget>`;
    pipUrColor =`
      <Widget>
      <WidgetId>camera_pip_ur_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipLlColor =`
      <Widget>
      <WidgetId>camera_pip_ll_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipLrColor =`
    <Widget>
    <WidgetId>camera_pip_lr_status</WidgetId>
    <Type>Button</Type>
    <Options>size=1;icon=red</Options>
    </Widget>`;
  }
  if (VarPIPOn == 'ur') {
    pipUlColor = `
      <WidgetId>camera_pip_ul_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipUrColor =`
      <Widget>
      <WidgetId>camera_pip_ur_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=green</Options>
      </Widget>`;
    pipLlColor =`
      <Widget>
      <WidgetId>camera_pip_ll_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipLrColor =`
      <Widget>
      <WidgetId>camera_pip_lr_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
  }
  if (VarPIPOn == 'll') {
    pipUlColor = `
      <WidgetId>camera_pip_ul_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipUrColor =`
      <Widget>
      <WidgetId>camera_pip_ur_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipLlColor =`
      <Widget>
      <WidgetId>camera_pip_ll_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=green</Options>
      </Widget>`;
    pipLrColor =`
    <Widget>
    <WidgetId>camera_pip_lr_status</WidgetId>
    <Type>Button</Type>
    <Options>size=1;icon=red</Options>
    </Widget>`;
  }
  if (VarPIPOn == 'lr') {
    pipUlColor = `
      <WidgetId>camera_pip_ul_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipUrColor =`
      <Widget>
      <WidgetId>camera_pip_ur_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipLlColor =`
      <Widget>
      <WidgetId>camera_pip_ll_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipLrColor =`
    <Widget>
    <WidgetId>camera_pip_lr_status</WidgetId>
    <Type>Button</Type>
    <Options>size=1;icon=green</Options>
    </Widget>`;
  }
  
     if (VarPIPOn == 'init') {
    pipUlColor = `
      <WidgetId>camera_pip_ul_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipUrColor =`
      <Widget>
      <WidgetId>camera_pip_ur_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipLlColor =`
      <Widget>
      <WidgetId>camera_pip_ll_status</WidgetId>
      <Type>Button</Type>
      <Options>size=1;icon=red</Options>
      </Widget>`;
    pipLrColor =`
    <Widget>
    <WidgetId>camera_pip_lr_status</WidgetId>
    <Type>Button</Type>
    <Options>size=1;icon=red</Options>
    </Widget>`;
  }

    
  
  xapi.command('UserInterface Extensions Panel Save', {PanelId: 'Camera_PIP_Panel'}, 
    `<Extensions>
    <Version>1.8</Version>
    <Panel>
    <Order>3</Order>
    <PanelId>Camera_PIP_Panel</PanelId>
    <Origin>local</Origin>
    <Type>Never</Type>
    <Icon>Lightbulb</Icon>
    <Name>Camera PIP Panel</Name>
    <ActivityType>Custom</ActivityType>
    <Page>
    <Name>Picture-In-Picture</Name>
    <Row>
    <Name>Row</Name>
    <Widget>
    <WidgetId>camera_pip_ul</WidgetId>
    <Name>Upper Left</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    <Widget>
    ${pipUlColor}
    </Row>
    <Row>
    <Name>Row</Name>
    <Widget>
    <WidgetId>camera_pip_ur</WidgetId>
    <Name>Upper Right</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    ${pipUrColor}
    </Row>
    <Row>
    <Name>Row</Name>
    <Widget>
    <WidgetId>camera_pip_ll</WidgetId>
    <Name>Lower Left</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    ${pipLlColor}
    </Row>
    <Row>
    <Name>Row</Name>
    <Widget>
    <WidgetId>camera_pip_lr</WidgetId>
    <Name>Lower Right</Name>
    <Type>Button</Type>
    <Options>size=2</Options>
    </Widget>
    ${pipLrColor}
    </Row>
    <PageId>PIP_Page</PageId>
    <Options>hideRowNames=1</Options>
    </Page>
    </Panel>
    </Extensions>`
  );
}

//initial panel draw
DrawCameraPanel("off");
DrawPresetPanel("none");
DrawPIPPanel ("init");

//Draw panel at button press
xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
  if (event.PanelId === 'Camera_Control_Button') {
 xapi.command('UserInterface Extensions Panel Open', {
    PanelId: 'Camera_Control_Panel'
    });
  }});

function ManualAdjust(VarAngleId){
  if (VarAngleId == 1){
    var VarTiltAngle = '-300';
    var VarPanAngle = '2000';
    var VarZoomDegree = '8500';
  }
  else if (VarAngleId == 2){
    var VarTiltAngle = '-305';
    var VarPanAngle = '-2000';
    var VarZoomDegree = '8500';
  } 
  else if (VarAngleId == 3)  {
    var VarTiltAngle = '305';
    var VarPanAngle = '-2000';
    var VarZoomDegree = '8500';
  }
  else if (VarAngleId == 4)  {
    var VarTiltAngle = '300';
    var VarPanAngle = '2000';
    var VarZoomDegree = '8500';
  }
  else if (VarAngleId == 100)  {
    var VarZoomDegree = '8500';
  }
  camera1active && xapi.command("Camera PositionSet", {CameraId: CAMERAID_CAMERA_LEFT,Tilt: VarTiltAngle,Pan: VarPanAngle,Zoom: VarZoomDegree});
  camera2active && xapi.command("Camera PositionSet", {CameraId: CAMERAID_CAMERA_RIGHT,Tilt: VarTiltAngle,Pan: VarPanAngle,Zoom: VarZoomDegree});
  
}

function PositionMove(moveCommand){
  if(["right","left","stop"].includes(moveCommand)){
    camera1active && xapi.command("Camera Ramp", {CameraId: CAMERAID_CAMERA_LEFT,Pan: moveCommand});
    camera2active && xapi.command("Camera Ramp", {CameraId: CAMERAID_CAMERA_RIGHT,Pan: moveCommand});
  }
  if(["up","down","stop"].includes(moveCommand)){
    camera1active && xapi.command("Camera Ramp", {CameraId: CAMERAID_CAMERA_LEFT,Tilt: moveCommand});
    camera2active && xapi.command("Camera Ramp", {CameraId: CAMERAID_CAMERA_RIGHT,Tilt: moveCommand});
  }
  if(["increment"].includes(moveCommand)){
    camera1active && xapi.command("Camera Ramp", {CameraId: CAMERAID_CAMERA_LEFT,ZoomSpeed: 1,Zoom: 'In'});
    camera2active && xapi.command("Camera Ramp", {CameraId: CAMERAID_CAMERA_RIGHT,ZoomSpeed: 1,Zoom: 'In'});
  }
  if(["decrement"].includes(moveCommand)){
    camera1active && xapi.command("Camera Ramp", {CameraId: CAMERAID_CAMERA_LEFT,ZoomSpeed: 1,Zoom: 'Out'});
    camera2active && xapi.command("Camera Ramp", {CameraId: CAMERAID_CAMERA_RIGHT,ZoomSpeed: 1,Zoom: 'Out'});
  }
    if(["stop"].includes(moveCommand)){
    camera1active && xapi.command("Camera Ramp", {CameraId: CAMERAID_CAMERA_LEFT,Zoom: moveCommand});
    camera2active && xapi.command("Camera Ramp", {CameraId: CAMERAID_CAMERA_RIGHT,Zoom: moveCommand});
  }
}

//Begin the event listener
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.WidgetId === 'preset_menu_button' && event.Type === 'pressed') {
    xapi.command('UserInterface Extensions Panel Open', {
    PanelId: 'Camera_Preset_Panel'
    });
  }
    if (event.WidgetId === 'pip_menu_button' && event.Type === 'pressed') {
    xapi.command('UserInterface Extensions Panel Open', {
    PanelId: 'Camera_PIP_Panel'
    });
  }
  if (event.WidgetId === 'camera_angle1' && event.Type === 'pressed') {
    ManualAdjust(1);
    DrawPresetPanel("one");
  }
  if (event.WidgetId === 'camera_angle2' && event.Type === 'pressed') {
    ManualAdjust(2);
    DrawPresetPanel("two");
  }
  if (event.WidgetId === 'camera_angle3' && event.Type === 'pressed') {
    ManualAdjust(3);
    DrawPresetPanel("three");
  }
  if (event.WidgetId === 'camera_angle4' && event.Type === 'pressed') {
    ManualAdjust(4);
    DrawPresetPanel("four");
  }
  //Pip camera control
  if (event.WidgetId === 'camera_pip_ul' && event.Type === 'pressed') {
    DrawPIPPanel("ul");
    xapi.command('Video ActiveSpeakerPIP Set', {Position: 'UpperLeft'});
  }
  if (event.WidgetId === 'camera_pip_ur' && event.Type === 'pressed') {
    DrawPIPPanel("ur");
    xapi.command('Video ActiveSpeakerPIP Set', {Position: 'UpperRight'});
  }
  if (event.WidgetId === 'camera_pip_ll' && event.Type === 'pressed') {
    DrawPIPPanel("ll");
    xapi.command('Video ActiveSpeakerPIP Set', {Position: 'LowerLeft'});
  }
  if (event.WidgetId === 'camera_pip_lr' && event.Type === 'pressed') {
    DrawPIPPanel("lr");
    xapi.command('Video ActiveSpeakerPIP Set', {Position: 'LowerRight'});
  }
    if (event.WidgetId === 'camera_selfview' && event.Type === 'pressed') {
    DrawPIPPanel("selfon");
    xapi.command('Video Selfview Set', {Mode: 'On'});
  }
  //Manual camera control
  if(event.WidgetId === 'camera_control_widget' && event.Type == 'pressed'){
    PositionMove(event.Value);
  }
  if(event.WidgetId === 'camera_control_widget' && event.Type == 'released'){
    PositionMove("stop");
  }
  //zoom
  if(event.WidgetId === 'zoom_widget' && event.Type == 'pressed'){
    PositionMove(event.Value);
  }
  if(event.WidgetId === 'zoom_widget' && event.Type == 'released'){
    PositionMove("stop");
  }

  // define the behavior of the camera selection buttons
  if (event.WidgetId === 'camera_1' && event.Type === 'pressed') {
    xapi.command("Video Input SetMainVideoSource", {ConnectorId: CAMERACONNECTORID_CAMERA_LEFT});
    camera1active = true;
    camera2active = false;
    DrawCameraPanel("one");
    DrawPresetPanel("none");
  }
  if (event.WidgetId === 'camera_2' && event.Type === 'pressed') {
    xapi.command("Video Input SetMainVideoSource", {ConnectorId: CAMERACONNECTORID_CAMERA_RIGHT});
    camera1active = false;
    camera2active = true;
    DrawCameraPanel("two");
    DrawPresetPanel("none");
  }
  if (event.WidgetId === 'camera_3' && event.Type === 'pressed') {
    xapi.command("Video Input SetMainVideoSource", {ConnectorId: [CAMERACONNECTORID_CAMERA_LEFT, CAMERACONNECTORID_CAMERA_RIGHT]});
    //dual cam mode changes only camera 2 manually per kyle
    camera1active = false;
    camera2active = true;
    DrawCameraPanel("both");
    DrawPresetPanel("none");
  }
});
