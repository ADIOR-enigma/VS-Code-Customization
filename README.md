![Screenshot 2025-01-12 194353](https://github.com/user-attachments/assets/f8fb04de-96ae-4b6a-8e59-ba712215291a)
![Screenshot 2025-01-12 194131](https://github.com/user-attachments/assets/8c9dca64-f73a-44b0-9035-d1e677c4f65d)
# Instructions

**NOTE:** Please take time to read the short documentation of **"Custom CSS and JS Loader"** for some useful tips for various operating systems to avoid issues regarding the changes not taking effect.

1. Install "VSCode Animations" VS Code Extension.
2. Install "Omni Qwl Theme" VS Code theme Extensio and 
3. Install "Custom CSS and JS Loader" VS Code Extension.
4. Copy the contents of settings.json to your VS Code's settings.json (warning: it will overwrite your settings).
5. Add `vscode_custom_css.imports` array to your settings.json file:
```
"vscode_custom_css.imports": [
    // Absolute file paths for your css/js files
    // For Mac or Linux
    // "file:///Users/your-user-name/custom-vscode.css",
    // "file:///Users/your-user-name/custom-vscode-script.js"

    // For Windows
    // "file:///C:/path-of-custom-css/custom-vscode.css",
    // "file:///C:/path-of-custom-css/custom-vscode-script.js"
],
```
6. You might need to take ownership of the CSS/JS files you made or run VS Code with admin privileges on certain operating system:
```
Mac and Linux users
The extension would NOT work if Visual Studio Code cannot modify itself. The cases include:

Code files being read-only, like on a read-only file system or,
Code is not started with the permissions to modify itself.
You need to claim ownership on Visual Studio Code's installation directory, by running this command:

Note: Replace /usr/share/code where your VS Code is installed.
sudo chown -R your-user-name /usr/share/code
```
7. Enable "Custom CSS and JS Loader" from VS Code's command dialog.
8. Customize the css or js from this repo to make it look the way you want to, or even better, explore areas of VS Code that you want to customize.
9. After making some changes, reload the extension (Reload Custom CSS and JS) from VS Code's command dialog.
