var playerHealth : int = 100;
var maxHealth : int =  100;

//Check to kill him when health is 0
function Update () {
    if(playerHealth <= 0){
        playerHealth = 0;
        killPlayer();
        //playerHealth -= Time.deltaTime * 10;
     
	 // if (playerHealth > maxHealth) {
	  //playerHealth = maxHealth;
}        
}
//Display the health
function OnGUI(){
    GUI.Box (new Rect (10, 10, 100, 20), "Health = " + playerHealth);
}

function killPlayer(){
    //destroy player
    Destroy(gameObject);
}

//When the player collides with an object tagged enemy subtract 1 from his health
function OnTriggerStay (other : Collider){
	if (other.gameObject.CompareTag("Black Orbit"))
		{
		//damaging = true;
		playerHealth -= 1; //Time.deltaTime;
		}
	if (other.gameObject.CompareTag("White Orb"))
		{
		//damaging = true;
		playerHealth += 1;  //Time.deltaTime;
		}
	if (playerHealth > maxHealth) {
	  	playerHealth = maxHealth;
}
}