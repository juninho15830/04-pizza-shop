import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Search, ArrowRight, X } from "lucide-react";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3"/>
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        0n34563295cm234
      </TableCell>
      <TableCell className="text-muted-foreground">
        há 15 minutos
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400">
          </span>
          <span className="font-medium text-muted-foreground">
            Pendente
          </span>
        </div>
      </TableCell>
      <TableCell className="font-medium">
        Diego Fernandes
      </TableCell>
      <TableCell className="font-medium">
        R$ 149,90
      </TableCell>
      <TableCell>
        <Button variant="outline" className="xs">
          <ArrowRight className="h-3 w-3 mr-2"/>
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" className="xs">
          <X className="h-3 w-3 mr-2"/>
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}