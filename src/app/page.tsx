'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useChat } from 'ai/react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                {message.role === 'user' ? (
                  <Avatar>
                    <AvatarImage src="https://github.com/anajuliarauber.png" alt="@shadcn" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                ) : (
                  <Avatar>
                    <AvatarFallback>Bot</AvatarFallback>
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800">
                    {message.role === 'user' ? 'User' : 'AI'}
                  </span>
                  {message.content}
                </p>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
