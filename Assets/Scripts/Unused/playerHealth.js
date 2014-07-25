//playerHealth.js
var healthTexture : Texture2D;
var healthBorder : Texture2D;
var adjust : int;
static var health : int = 100; // static lets it be accessed by other scripts (eg: playerHealth.health = xxxxx)
 
function Update(){
adjust = health * 3;
}
 
function OnGUI () {
 
GUI.DrawTexture(Rect(43,Screen.height - 890,314,36), healthBorder);
GUI.BeginGroup(Rect(55,Screen.height - 880,adjust,15));
GUI.DrawTexture(Rect(0,0,290,15), healthTexture);
GUI.EndGroup();
}