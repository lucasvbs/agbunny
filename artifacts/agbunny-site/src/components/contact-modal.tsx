import { MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function ContactModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-cyan-500/20 bg-background/95 backdrop-blur-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            Vamos conversar
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            O canal oficial de atendimento será publicado aqui em breve.
            Assim, você sempre falará com a equipe certa, sem depender de um
            número ou endereço não confirmado.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 rounded-lg border border-cyan-500/15 bg-cyan-500/5 p-4">
          <p className="text-sm leading-relaxed text-cyan-50/80">
            Atendimento comercial da AGBunny — LS Design e Desenvolvimento
            Ltda., CNPJ 50.416.508/0001-43.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}