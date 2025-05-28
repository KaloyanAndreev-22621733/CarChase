import { UploadIcon } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";

type Props = {
  onImagesChange: (images: { mainImage: File | null; smallImages: File[] }) => void;
};

function ImageUploader({ onImagesChange }: Props) {
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [smallImages, setSmallImages] = useState<(File | null)[]>([null, null, null, null]);

  const notifyParent = useCallback(() => {
    const filteredSmallImages = smallImages.filter((img): img is File => img !== null);
    onImagesChange({ mainImage, smallImages: filteredSmallImages });
  }, [mainImage, smallImages, onImagesChange]);

  function handleDrop(e: React.DragEvent, index?: number) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith("image/")) return;

    if (index === undefined) {
      setMainImage(file);
    } else {
      const updated = [...smallImages];
      updated[index] = file;
      setSmallImages(updated);
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function renderPreview(file: File | null) {
    if (file) {
      return <img src={URL.createObjectURL(file)} alt="preview" className="h-full w-full object-cover rounded" />;
    }
    return null;
  }

  useEffect(() => {
    notifyParent();
  }, [notifyParent]);

  return (
    <div>
      <h2 className="text-purple-700 font-semibold mb-4">Upload images</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Большой блок слева */}
        <div className="col-span-2">
          <div
            className="h-full min-h-[300px] bg-purple-100 flex items-center justify-center rounded border-2 border-dashed border-purple-300 overflow-hidden"
            onDrop={(e) => handleDrop(e)}
            onDragOver={handleDragOver}
          >
            {renderPreview(mainImage) || <UploadIcon />}
          </div>
        </div>

        {/* Четыре маленьких блока справа */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {smallImages.map((img, i) => (
            <div
              key={i}
              className="h-32 bg-purple-100 flex items-center justify-center rounded border-2 border-dashed border-purple-300 overflow-hidden"
              onDrop={(e) => handleDrop(e, i)}
              onDragOver={handleDragOver}
            >
              {renderPreview(img) || <UploadIcon />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;