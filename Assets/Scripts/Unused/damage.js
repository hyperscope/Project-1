//damage.js
var enter : boolean = false;
var damage = 10;
 
function Update () {
if(enter == true){
playerHealth.health -= damage * Time.deltaTime;
}
}
 
 
function OnTriggerEnter (other : Collider){
 
if (other.gameObject.tag == "Player") {
enter = true;
}
}
 
 
function OnTriggerExit (other : Collider){
 
if (other.gameObject.tag == "Player") {
(enter) = false;
}
}