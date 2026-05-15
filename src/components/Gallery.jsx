import React from 'react';
import ArtCard from './ArtCard';

const Gallery = () => {
  const categories = ["All", "Art", "Collectibles", "Music", "Photography"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const artworks = [
    {
      id: 1,
      title: "Digital Ethereal",
      artist: "neonsoul",
      price: "0.85",
      likes: "1.2k",
      category: "Art",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Vibrant Geometry",
      artist: "shape_master",
      price: "1.2",
      likes: "850",
      category: "Collectibles",
      image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Abstract Flow",
      artist: "fluidity",
      price: "0.45",
      likes: "2.1k",
      category: "Art",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Cyberpunk Dreams",
      artist: "nightcity",
      price: "2.5",
      likes: "3.4k",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1605142859862-978be7eba909?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Minimalist Void",
      artist: "zen_art",
      price: "0.95",
      likes: "600",
      category: "Art",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Organic Pulse",
      artist: "biomorph",
      price: "1.5",
      likes: "1.8k",
      category: "Music",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredArtworks = activeCategory === "All"
    ? artworks
    : artworks.filter(art => art.category === activeCategory);

  return (
    <section id="explore" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured Artworks</h2>
            <p className="text-gray-400 text-lg">Handpicked masterpieces from our top creators worldwide.</p>
          </div>
          <div className="flex gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/5 overflow-x-auto max-w-full no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[400px]">
          {filteredArtworks.map((art) => (
            <ArtCard key={art.id} {...art} />
          ))}
          {filteredArtworks.length === 0 && (
            <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-3xl">
              <p className="text-gray-500">No artworks found in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
