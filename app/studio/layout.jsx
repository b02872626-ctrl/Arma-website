// Studio gets its own minimal layout — no sticky navbar, no smooth scroll
// (Sanity Studio manages its own scroll/UI).
export const metadata = {
  title: "ARMA Studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }) {
  return children;
}
