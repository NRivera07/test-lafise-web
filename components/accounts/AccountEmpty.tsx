export default function AccountEmpty() {
  return (
    <div className="flex h-64 flex-col items-center justify-center rounded-md border border-dashed border-[#DFE1DF] bg-white">
      <h3 className="text-lg font-semibold text-text-primary">
        No tienes cuentas disponibles
      </h3>

      <p className="mt-2 text-sm text-text-secondary">
        Cuando tengas cuentas registradas aparecerán aquí.
      </p>
    </div>
  );
}
