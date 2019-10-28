# rootjs_galleryFinal

### detailed instructions in the main.js file

- when any image is clicked on
  - open a bootstrap modal: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
  - change the image inside the modal to the image that was clicked on
    - hint: check the src of the image that was clicked on for the correct data
    - hint: check out jquery attr
    - hint: make sure to target the correct image to change

- make each image sortable with the jquery UI sortable method
  - http://api.jqueryui.com/sortable/
  - example: https://jqueryui.com/sortable/
  
### extra
- after the images are sorted (dragged)
  - fill an array with the images in their current order (hint, use the src)
  - store them into localstorage
