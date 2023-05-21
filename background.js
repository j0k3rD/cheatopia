//background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['./searchCopy.js']
        })
        .then(() => {
            console.log('INJECTED THE SEARCHCOPY SCRIPT.');
        })
        .catch(err => console.log(err));
    }
});