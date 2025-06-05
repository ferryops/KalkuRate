export function Result({ nilai }: { nilai: number }) {
  return (
    <div className="p-4 rounded-xl bg-green-100 text-green-900 text-lg font-semibold shadow">
      Billing Rate per Bulan: Rp {nilai.toLocaleString("id-ID")}
    </div>
  );
}
