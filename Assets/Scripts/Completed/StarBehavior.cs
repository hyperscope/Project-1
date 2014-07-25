using UnityEngine;
using System.Collections;

public class StarBehavior : MonoBehaviour {
	
	
	void OnTriggerEnter(Collider collider)
	{
		
		switch(collider.gameObject.name)
		{
			
			
		case "Player":
			
			StarController.starCount++;
			
			Destroy (this.gameObject);
			
			break;
			
		}
		
		
	}
	
}