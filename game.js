// Function to display the selected tab
function showTab(tabName) {
  // Hide all tab contents
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none');

  // Show the selected tab
  const selectedTab = document.getElementById(tabName);
  selectedTab.style.display = 'block';

  // Log the action to the output area
  document.getElementById('output-text').textContent = tabName.charAt(0).toUpperCase() + tabName.slice(1) + ' tab selected.';
}

// Function to save settings and update output
function saveSettings() {
  const language = document.getElementById('language').value;
  const dataSaver = document.getElementById('data-saver').checked;

  let outputText = `Settings saved. Language: ${language}, Data Saver: ${dataSaver ? 'On' : 'Off'}.`;
  document.getElementById('output-text').textContent = outputText;
}

// Initial tab setup
window.onload = function() {
  showTab('inventory');  // Show the inventory tab by default
};
