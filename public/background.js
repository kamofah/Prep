/* global chrome */
chrome.runtime.onInstalled.addListener(() => {
    console.log("Prep extension installed.");
});
  
chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("Alarm triggered:", alarm.name);
    // Trigger your prep logic and notifications here
});