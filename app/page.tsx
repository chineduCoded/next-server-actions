import { MessageCreateForm } from "@/components/message-create-form";
import { MessageList } from "@/components/message-list";


export default function Home() {
  return (
    <main className="p-4 flex justify-center items-center flex-col gap-y-6">
      <MessageCreateForm />
      <MessageList />
    </main>
  );
}
