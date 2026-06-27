export default function TransferActions() {
  return (
    <div className="flex justify-center gap-8 border-[#DFE1DF] py-10">
      <button
        type="button"
        className="
          h-14
          w-44
          rounded
          border
          border-[#3B8668]
          font-medium
          text-[#3B8668]
        "
      >
        Atrás
      </button>

      <button
        type="submit"
        className="
          h-14
          w-44
          rounded
          bg-[#00593B]
          font-medium
          text-white
        "
      >
        Continuar
      </button>
    </div>
  );
}
