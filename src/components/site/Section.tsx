export const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      {/* SECTION JUDUL */}
      <h1 className="text-lg font-bold">{title}</h1>

      {/* SECTION DESCRIPTION */}
      <p className="mt-1 text-gray-600">{description}</p>

      {/* SECTION PREVIEW */}
      <div className="mt-3">
        <div className="flex flex-col rounded-xl border p-6 shadow-sm">
          <div className="flex flex-wrap gap-2">{children}</div>
        </div>
      </div>
    </div>
  );
};
