function PDFViewer({ pdfUrl }: { pdfUrl: string }) {
  return (
    <div className="w-full h-full">
      <iframe
        src={pdfUrl}
        width="100%"
        height="100%"
        title="PDF Viewer"
        style={{ border: "none" }}
      />
    </div>
  );
}

export default PDFViewer;
