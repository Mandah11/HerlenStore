type MenuItemProps = {
  label: string;
  count: number;
  active?: boolean;
  onClick?: () => void;
};

export function MenuItem({
  label,
  count,
  active = false,
  onClick,
}: MenuItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-auto rounded-full border px-4 py-2.5 text-sm transition ${
        active
          ? "border-[#ff4b4b] bg-white text-[#121212]"
          : "border-[#d9dde6] bg-white text-[#202124] hover:border-[#aeb6c7]"
      }`}
    >
      <span className="flex items-center gap-2.5">
        <span className="whitespace-nowrap">{label}</span>
        <span
          className="flex h-6 min-w-8 items-center justify-center rounded-full bg-[#111217] px-2 text-xs font-semibold text-white"
        >
          {count}
        </span>
      </span>
    </button>
  );
}
