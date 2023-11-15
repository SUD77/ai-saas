import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";

const ConversationPage = () => {
  return (
    <div>

      {/* This is heading component of Conversation Page */}
      <Heading 
      title="Conversation"
      description="Our most advanced conversation model."
      icon={MessageSquare}
      iconColor="text-violet-500"
      bgColor="bg-violet-500/10"
      />
    </div>
  );
}

export default ConversationPage;