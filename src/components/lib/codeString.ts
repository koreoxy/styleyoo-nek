// Definisikan tipe data untuk item dalam list
type ListItem = {
  value: string;
  codeTag: string[];
};

// Buat data list
const dataString: ListItem[] = [
  {
    value: "Ini adalah contoh kode dalam TypeScript",
    codeTag: ["TypeScript"],
  },
  {
    value: "Berikut adalah contoh kode dalam JavaScript",
    codeTag: ["JavaScript"],
  },
  {
    value: "Ini adalah contoh kode dalam Python",
    codeTag: ["Python"],
  },
  {
    value: "Berikut adalah contoh kode dalam HTML",
    codeTag: ["HTML"],
  },
];

// Fungsi untuk menampilkan data berdasarkan codeTag tertentu
export function CodeDisplay(codeTag: string): void {
  const filteredData = dataString.filter((item) =>
    item.codeTag.includes(codeTag)
  );

  if (filteredData.length > 0) {
    console.log(`Data dengan codeTag '${codeTag}':`);
    filteredData.forEach((item) => {
      console.log(item.value);
    });
  } else {
    console.log(`Tidak ada data dengan codeTag '${codeTag}'.`);
  }
}

// Export dataList
export { dataString };
