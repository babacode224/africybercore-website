import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


const PdfModal = ({ open, onClose, title, fileUrl, downloadName }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center w-full">
            {title}
          </DialogTitle>
        </DialogHeader>

        {/* Embed PDF inside modal */}
        <div className="h-[500px] w-full">
          <iframe
            src={fileUrl}
            title={title}
            className="w-full h-full rounded-lg border border-gray-300"
          />
        </div>

        <DialogFooter className="mt-4 flex justify-between">
          <Button variant="outline"  onClick={onClose}>
            Close
          </Button>
          <a
            href={fileUrl}
            download={downloadName || fileUrl.split("/").pop()}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            Download PDF
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PdfModal;
