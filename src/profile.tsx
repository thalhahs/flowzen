export function Profile() {
  const imageUrl = "https://unsplash.com/photos/bald-man-in-sunglasses-dancing-in-studio-SQ5SFrjoXy4";
  const name = "Karsten Winegeart";

  return <img src={imageUrl} alt={name} />;
}
