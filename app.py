import gradio as gr
from deepface import DeepFace
import os

EVENT_PHOTOS_PATH = "event_photos/"

def find_matches(input_image):
    matched_photos = []
    for photo_name in os.listdir(EVENT_PHOTOS_PATH):
        photo_path = os.path.join(EVENT_PHOTOS_PATH, photo_name)
        try:
            result = DeepFace.verify(
                img1_path=input_image,
                img2_path=photo_path,
                model_name="Facenet",
                enforce_detection=False  # Skip if no face found
            )
            if result["verified"]:
                matched_photos.append(photo_path)  # Add image paths to array
        except Exception as e:
            print(f"Error processing {photo_name}: {e}")
    return matched_photos  # Return array of matched image paths

# Custom CSS for grid layout
css = """
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}
"""

# Gradio Interface with Grid
with gr.Blocks(css=css) as app:
    gr.Markdown("## 🔍 Find ME")
    with gr.Row():
        input_image = gr.Image(type="filepath", label="Upload Your Selfie")
        submit_btn = gr.Button("Search")
    
    # Gallery output with grid CSS
    gallery = gr.Gallery(label="Matching Photos", columns=3, height="auto")

    submit_btn.click(
        fn=find_matches,
        inputs=input_image,
        outputs=gallery
    )

    gr.Markdown("### Matching Photos")
    gr.Markdown("Upload a selfie to find matching photos from the event.")
app.launch(share=True)  # Set `share=False` for local-only