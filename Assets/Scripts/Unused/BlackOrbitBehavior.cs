using UnityEngine;
using System.Collections;

public class BlackOrbitBehavior : MonoBehaviour {
	
	
	void OnTriggerEnter(Collider collider)
	{
		
		switch(collider.gameObject.name)
		{
			
			
		case "BlackOrbit":
			
			Destroy (this.gameObject);
			
			break;
			
		}
		
		
	}
	
}