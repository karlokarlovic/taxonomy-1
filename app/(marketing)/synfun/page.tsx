import { ArrowRight, Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// import { Payment, columns } from "./components/columns"

export default async function featureMovement() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Feature Movements.
        </h1>
        <Card>
          <CardHeader>
            <CardTitle>3. Attendance and absence events </CardTitle>
            <CardDescription>
              The Student Attendance and Absence Events module allows you to
              record student attendances and absence events to meet the needs
              of: your organisation the government department that may require
              information from your organisation, particularly for attendance
              and truancy matters. You can view all of the students in the class
              and mark the records of those students who were present and
              absent. Attendance records are created for both absent and present
              students.Absence event records are created for any absent students
              or events you need to record.You can view reports to assist with
              managing student attendances.You can monitor student absence
              data.Student absence events You can record individual students as
              absent. Recording absence slips. Recording late sign ins.
              Recording all day absences. Recording excursions.You can record
              planned absences for individual students. Recording a students
              expected arrival. Recording a students expected departure.
              Recording a students expected departure and return.You can record
              groups of students as absent, such as when a class is on a camp.
              You can cancel classes in bulk to maintain accurate records when
              multiple classes do not occur or a class does not occur for an
              extended period. You can record students signing in and out
              manually. Recording a student signing out manually. You can also
              use Synergetic to record students signing in and out using
              barcodes or RFIDs on their student cards. You can review and
              follow up unexplained absences that arise during the day.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-bold">
                    3.5 Class attendance
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Teachers mark rolls daily; they or office staff enter
                    attendance data into Synergetic, with separate
                    Officer/Teacher modes for accuracy.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full " variant="outline">
                    <ArrowRight className="mr-2 h-4 w-4" /> Read more
                  </Button>
                </CardFooter>
                <div className="flex flex-row items-center justify-between pb-6 pl-6 pr-6">
                  <Badge variant="secondary">Old System</Badge>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4 text-muted-foreground"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <Badge variant="secondary">New system</Badge>
                </div>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-bold">
                    ;;number;; ;;title;;
                  </CardTitle>
                  ;;logo;;
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    ;;summerised of child page;;
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full " variant="outline">
                    <ArrowRight className="mr-2 h-4 w-4" /> Read more ;;link
                    to full page;;
                  </Button>
                </CardFooter>
                <div className="flex flex-row items-center justify-between pb-6 pl-6 pr-6">
                  <Badge variant="secondary">;;Old System;;</Badge>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4 text-muted-foreground"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <Badge variant="secondary">;;New system;;</Badge>
                </div>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          {/* <CardFooter>
            <Button className="w-full">
              <ArrowRightIcon className="mr-2 h-4 w-4" /> Read More
            </Button>
          </CardFooter> */}
        </Card>
      </div>
    </section>
  )
}
