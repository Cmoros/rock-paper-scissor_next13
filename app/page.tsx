import PlayerForm from "@/components/PlayerForm";

export default function Home() {
  return (
    <div className="">
      <h1 className="title text-2xl lg:text-3xl">
        Welcome to my Rock-Paper-Scissors!
      </h1>

      <PlayerForm />
    </div>
  );
}
