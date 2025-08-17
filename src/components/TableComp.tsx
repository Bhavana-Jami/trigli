import { CalendarDays, Activity, ArrowRight, ArrowDown, Edit, TrashIcon } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
interface TableCompProps {
  triggers: any;
  showEditForm: boolean;
  handleEdit: (trigger:any) => void;
  handleDelete: (id: string) => void;
  showSingleTrigger: string | null;
  setShowSingleTrigger: React.Dispatch<React.SetStateAction<string | null>>;
}

const TableComp = ({
  triggers,
  handleEdit,
  handleDelete,
  showSingleTrigger,
  setShowSingleTrigger,
}: TableCompProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="px-6 py-4">Trigger</TableHead>
          <TableHead className="px-6 py-4">Intensity</TableHead>
          <TableHead className="px-6 py-4">Tags</TableHead>
          <TableHead className="px-6 py-4">Date</TableHead>
          <TableHead className="px-6 py-4">Edit</TableHead>
          <TableHead className="px-6 py-4">Delete</TableHead>
          <TableHead className="px-6 py-4">Expand</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {triggers.map((trigger:any) => (
          <>
            {/* Main row */}
            <TableRow
              key={trigger.id}
              className="hover:bg-muted/50 transition-colors"
            >
              <TableCell className="px-6 py-4 font-medium">
                {trigger.title}
              </TableCell>
              <TableCell className="px-6 py-4">{trigger.intensity}</TableCell>
              <TableCell className="px-6 py-4">{trigger.tags}</TableCell>
              <TableCell className="px-6 py-4">{trigger.date}</TableCell>

              <TableCell className="px-6 py-4">
                {/* {showEditForm && trigger.id ? (
                  <Save className="cursor-pointer" />
                ) : ( */}
                  <Edit
                    className="cursor-pointer"
                    onClick={()=>handleEdit(trigger)}
                  />
                {/* )} */}
              </TableCell>

              <TableCell className="px-6 py-4">
                <TrashIcon
                  className="cursor-pointer text-red-500"
                  onClick={() => handleDelete(trigger.id)}
                />
              </TableCell>

              <TableCell
                onClick={() =>
                  setShowSingleTrigger(
                    trigger.id === showSingleTrigger ? null : trigger.id
                  )
                }
                className="px-6 py-4 cursor-pointer"
              >
                {showSingleTrigger === trigger.id ? (
                  <ArrowDown />
                ) : (
                  <ArrowRight />
                )}
              </TableCell>
            </TableRow>

            {/* Expandable row */}
            {trigger.id === showSingleTrigger &&
              trigger.previousTriggers?.length > 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="px-6 py-4">
                    <div className="space-y-3">
                      {trigger.previousTriggers.map((prevTrigger:any) => (
                        <div
                          key={prevTrigger.id}
                          className="p-4 rounded-xl bg-purple-100 border border-purple-200"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">
                                {prevTrigger.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {prevTrigger.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-6 text-sm">
                              <span className="flex items-center gap-1">
                                <Activity className="w-4 h-4" />{" "}
                                {prevTrigger.intensity}/10
                              </span>
                              <span className="flex items-center gap-1">
                                <CalendarDays className="w-4 h-4" />{" "}
                                {prevTrigger.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              )}
          </>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableComp
