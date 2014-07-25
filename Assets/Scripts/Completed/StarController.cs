using UnityEngine;
using System.Collections;

public class StarController : MonoBehaviour {
	
	public static int starCount = 0;
	
	
	void OnGUI()
	{
		string starText = "Stars: " + starCount;
		
		GUI.Box (new Rect(Screen.width - 150, 20, 130, 20), starText);
		
		
	}
	
}
