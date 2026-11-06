import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  return(
    <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
      {products.map(p => {
        return(<ProductCard key={p.id} product={p}/>);
      })}
    </div>
  );
}