import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function BannerControls({ onPrevious, onNext }) {
  return (
    <>
      <Button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white p-2 shadow-lg"
        variant="ghost"
        size="icon"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white p-2 shadow-lg"
        variant="ghost"
        size="icon"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </>
  );
}