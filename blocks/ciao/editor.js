const { useBlockProps } = wp.blockEditor;
function Edit() {
  return (
    '<p ' + useBlockProps() + '>' +
      __( 'Copyright Date Block – hello from the editor!', 'copyright-date-block-demo' ) +
    '</p>'
  );
}
export default Edit;
