// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod cmd;
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_dialog::init()) // 👈 enable dialog
        .invoke_handler(tauri::generate_handler![
            greet,
            cmd::open_folder_and_list_items,
            cmd::read_image_bytes,
            ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
