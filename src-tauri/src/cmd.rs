//cmd.rs
use tauri::command;
use std::fs;
use std::path::PathBuf;
use tauri_plugin_dialog::DialogExt;

#[command]
pub fn read_image_bytes(path: String) -> Result<Vec<u8>, String> {
    let path_buf = PathBuf::from(path);
    fs::read(path_buf).map_err(|e| format!("Failed to read image: {}", e))
}
#[command]
pub async fn open_folder_and_list_items(app: tauri::AppHandle) -> Result<Vec<String>, String> {
    // Open system folder picker
    let folder = app.dialog().file().blocking_pick_folder();

    // Convert FilePath -> PathBuf
    let folder_path: PathBuf = match folder {
        Some(file_path) => {
            file_path.as_path()                     // Option<&Path>
                .ok_or("Selected folder path is invalid")? // unwrap Option<&Path> or return Err
                .to_path_buf()                    // &Path -> PathBuf
        }
        None => return Err("No folder selected".into()),
    };

    // Check if folder exists
    if !folder_path.exists() {
        return Err("Folder does not exist".into());
    }

    // Read folder contents
    let mut entries = Vec::new();
    for entry in fs::read_dir(&folder_path).map_err(|e| format!("Failed to read folder: {}", e))? {
        let entry = entry.map_err(|e| format!("Failed to read entry: {}", e))?;
        entries.push(entry.path().to_string_lossy().to_string());
    }

    Ok(entries)
}
