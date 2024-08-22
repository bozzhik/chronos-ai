export default function Fragment() {
  return (
    <div className="w-full h-[35vh] bg-neutral-900 rounded-xl overflow-hidden p-1.5">
      <video className="object-cover s-full rounded-lg" width="100%" height="100%" muted loop autoPlay playsInline preload="auto">
        <source src="videos/fragment.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
