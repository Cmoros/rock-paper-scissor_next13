import PlayerForm from "@/components/PlayerForm";

export default function Home() {
  return (
    <div
      className={`bgc2 relative m-auto max-h-90 min-h-400 min-w-70 max-w-90 rounded-md p-10 text-center shadow-2xl shadow-black`}>
      <h1 className="title text-2xl lg:text-3xl">
        Welcome to my Rock-Paper-Scissors!
      </h1>

      <PlayerForm />
    </div>
  );
}
