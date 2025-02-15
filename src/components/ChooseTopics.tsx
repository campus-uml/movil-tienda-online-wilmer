import { Check } from "lucide-react";

export default function ChooseTopics() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white px-6 py-4">
      <div className="w-full max-w-4xl mx-auto flex flex-col justify-between h-full gap-16 pt-12">
        <div className="mt-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1C274C] mb-2 text-center">
            Choose Topics
          </h1>
          <p className="text-gray-500 mb-4 text-center">
            You can choose topics and we will suggest suitable products for you
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 place-content-center px-4">
          <div className="flex flex-col items-center gap-2">
            <div className="relative aspect-square rounded-2xl bg-[#F1F5F9] cursor-pointer overflow-hidden">
              <img
                src="/img/fruits.jpg"
                alt="Fruits"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 right-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
            <span className="text-[#1C274C] font-medium">Fruits</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="relative aspect-square rounded-2xl bg-[#F1F5F9] cursor-pointer overflow-hidden">
              <img
                src="/img/meat.jpg"
                alt="Meat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 right-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
            <span className="text-[#1C274C] font-medium">Meat</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative aspect-square rounded-2xl bg-[#F1F5F9] cursor-pointer overflow-hidden">
              <img
                src="/img/healthy.jpg"
                alt="Healthy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 right-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
            <span className="text-[#1C274C] font-medium">Healthy</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative aspect-square rounded-2xl bg-[#F1F5F9] cursor-pointer overflow-hidden">
              <img
                src="/img/snack.avif"
                alt="Snack"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 right-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
            <span className="text-[#1C274C] font-medium">Snack</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative aspect-square rounded-2xl bg-[#F1F5F9] cursor-pointer overflow-hidden">
              <img
                src="/img/vegetable.png"
                alt="Vegetable"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 right-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
            <span className="text-[#1C274C] font-medium">Vegetable</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative aspect-square rounded-2xl bg-[#F1F5F9] cursor-pointer overflow-hidden">
              <img
                src="/img/fish.jpg"
                alt="Fish"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 right-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
            <span className="text-[#1C274C] font-medium">Fish</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative aspect-square rounded-2xl bg-[#F1F5F9] cursor-pointer overflow-hidden">
              <img
                src="/img/drink.jpg"
                alt="Drink"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 right-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
            <span className="text-[#1C274C] font-medium">Drink</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative aspect-square rounded-2xl bg-[#F1F5F9] cursor-pointer overflow-hidden">
              <img
                src="/img/nuts.jpg"
                alt="Nuts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 right-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
            <span className="text-[#1C274C] font-medium">Nuts</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative aspect-square rounded-2xl bg-[#F1F5F9] cursor-pointer overflow-hidden">
              <img
                src="/img/medicine.png"
                alt="Medicine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute top-2 right-2">
                <div className="bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>
            <span className="text-[#1C274C] font-medium">Medicine</span>
          </div>
        </div>

        <div className="w-full mb-8">
          <button className="w-full bg-green-500 text-white py-3 sm:py-4 rounded-2xl font-semibold text-lg">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
