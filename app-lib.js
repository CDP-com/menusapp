//***** Use this file to set up your buttons and include any custom functions for your app *****
// 
var development = 0;						// 1 this app is in development, 0 this app is in production
//var currentUserDefaultCaution = "0";		// **This is the global Throw caution to the wind flag for the current use

/*-----------------------------------------------------*/
/*-------------- Standard App Variables ---------------*/
/*-----------------------------------------------------*/

var appname = "menusapp";				// This app's name / folder name which must be unique
var apptitle = "Menus App";				// This display title written to the HTML
var connect_link = "http://factory.snapback-apps.com/app/menus-app/";     // The link to your App's Connect Page in the SnapBack Apps Factory 
var group_name ="App Helpers";				// The group or individual responsible for this app

/*-----------------------------------------------------*/
/*---------------------- Buttons ----------------------*/
/*-----------------------------------------------------*/

var btncount = 4;                            // This is the number of buttons on the App Home tab in main.html

//Setup for Button0 (The First Button)
var btn0_Title = "Create a Custom Menu";		// This is what is displayed on the button.
var btn0_MouseOver = "Create a new custom menu for you to use with the SnapBack Apps Platform";	// This is what appears upon mouseover for the button.
var btn0_Description = "Easily create a new custom menu to use with the platform.  You can even create a shared menu that multiple users will be able to access.  This menu can include any shortcuts of your choosing.";		// This is what is displayed as the description of the button.
var btn0_Why = "The explaination for why someone would want to run this button.";		// Use this to explain to an end user why they would want to run this button.
var btn0_Command = "button0.js";	// This is the actual script the button will be calling.
var btn0_Source = "button0.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn0_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn0_id="btn0";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button0 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn0_KeyValue="button0"; 				// Key value name for the registry
var btn0_DefaultEnableButton=1;
var btn0_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn0_DefaultAllowUser=1;
var btn0_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn0_DefaultCaution=1;
var btn0_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn0_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname0 ="";

// Service Information for Button0
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn0_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn0_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn0_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn0( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		//This function executes your script.  Do not edit this line
}





//Setup for Button1 (The Second Button)
var btn1_Title = "Create an \"Administrator's Tools\" Menu";		// This is what is displayed on the button.
var btn1_MouseOver = "Add the Administrator's Tools Menu to your SnapBack Apps Platform.";		// This is what appears upon mouseover for the button.
var btn1_Description = "Populate a new menu with a class of shortcuts to make your life as an administrator easy.  These tools are some of the most popular and effective administration tools, as determined by the SnapBack Apps community of users.";		// This is what is displayed as the description of the button.
var btn1_Why = "The explaination for why someone would want to run this button.";		// Use this to explain to an end user why they would want to run this button.
var btn1_Command = "button1.js";	// This is the actual script the button will be calling.
var btn1_Source = "button1.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn1_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn1_id="btn1";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button1 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn1_KeyValue="button1"; 				// Key value name for the registry
var btn1_DefaultEnableButton=1;
var btn1_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn1_DefaultAllowUser=1;
var btn1_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn1_DefaultCaution=1;
var btn1_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn1_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname1 ="";

// Service Information for Button1
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn1_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn1_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn1_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn1( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		//This function executes your script.  Do not edit this line
}





//Setup for Button2 (The Third Button)
var btn2_Title = "Create a \"Sysinternals Tools\" Menu";		// This is what is displayed on the button.
var btn2_MouseOver = "Add the Sysinternals Tools Menu to your SnapBack Apps Platform.";		// This is what appears upon mouseover for the button.
var btn2_Description = "Populate a new menu with a class of shortcuts relating to Sysinternals.";		// This is what is displayed as the description of the button.
var btn2_Why = "The explaination for why someone would want to run this button.";		// Use this to explain to an end user why they would want to run this button.
var btn2_Command = "button2.js";	// This is the actual script the button will be calling.
var btn2_Source = "button2.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn2_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn2_id="btn2";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button2 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn2_KeyValue="button2"; 				// Key value name for the registry
var btn2_DefaultEnableButton=1;
var btn2_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn2_DefaultAllowUser=1;
var btn2_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn2_DefaultCaution=1;
var btn2_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn2_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname2 ="";

// Service Information for Button2
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn2_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn2_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn2_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn2( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		//This function executes your script.  Do not edit this line
}





//Setup for Button3 (The Fourth Button)
var btn3_Title = "Reset Menus";		// This is what is displayed on the button.
var btn3_MouseOver = "Reset the menus to their defaults.";		// This is what appears upon mouseover for the button.
var btn3_Description = "Reset the menus to their default states with the click of this one button.";		// Use this to explain to an end user why they would want to run this button.
var btn3_Why = "The explaination for why someone would want to run this button.";		// Use this to explain to an end user why they would want to run this button.
var btn3_Command = "button3.js";	// This is the actual script the button will be calling.
var btn3_Source = "button3.txt";    // Duplicate the above script as a .txt file so that the source code can be shown on the How it Works tab.
var btn3_CommandParms = "";                 // Add any parameters if and only if your command receives them.
var btn3_id="btn3";							// The unique ID of the button.  Please follow the format provided.

// Permissions for button2 to be set in HKEY_LOCAL_MACHINE 
// Don't forget to edit the complementary app-reg.reg file and run it as an administrator
var btn3_KeyValue="button3"; 				// Key value name for the registry
var btn3_DefaultEnableButton=1;
var btn3_CurrentEnableButton=1;        		// Display on Permissions tab.  Only an admin can modify current values 
var btn3_LastModifiedEnableButton="";  		// Update timestamp if admin modifies current value
var btn3_DefaultAllowUser=1;
var btn3_CurrentAllowUser=1;         		// Display on Permissions tab.  Only an admin can modify current values 
var btn3_LastModifiedAllowUser="";   		// Update timestamp if admin modifies current value
var btn3_DefaultCaution=1;
var btn3_CurrentCaution=1;           		// Display on Permissions tab.  Only an admin can modify current values 
var btn3_LastModifiedCaution="";     		// Update timestamp if admin modifies current value
//var buttonname3 ="";

// Service Information for Button3
// This is used in production only and verified by the Certification Committee
// Do not edit if you are unfamiliar with the SnapBack Apps Service
var btn3_ServiceName="";                    // A unique name if using the service.  Need by service in xml file for button 
var btn3_ElevateNeeded=0;                  	// Does this button need elevation? Needed by service in xml file for button
var btn3_ScriptHasUI=0;                    	// Does the script have an UI? Needed by service in xml file for button

// Run Button Function
// This runs your button when it is clicked
// Add any functions or calls you wish to make before or after the primary "RunApps" function
function RunBtn3( AppName, ButtonNum, Computername, CurrentUser, sCmd ){
	RunApps( AppName, ButtonNum, Computername, CurrentUser, sCmd );		//This function executes your script.  Do not edit this line
}



	
/*-----------------------------------------------------*/
/*----------------- Custom Functions ------------------*/
/*-----------------------------------------------------*/	
//***** Use the below area for your common functions *****





