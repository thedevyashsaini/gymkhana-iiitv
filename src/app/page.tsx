import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { JSX, SVGProps } from "react"

export default function landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-bold">IIITV Gymkhana</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Events
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Activities
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Achievements
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Testimonials
            </Link>
          </nav>
          <Button variant="secondary" className="hidden md:inline-flex">
            Join Now
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[url('/conference_room.png')] bg-cover bg-center py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl text-white font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Unleash Your Potential at IIITV Gymkhana
                </h1>
                <p className="text-lg text-primary-foreground/80">
                  Discover a vibrant community of students dedicated to personal growth, fitness, and campus life.
                </p>
                <Button variant="secondary">Join Now</Button>
              </div>
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="IIITV Gymkhana"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        <section id="about" className="py-12 md:py-24 px-6">
          <div className="container mx-auto space-y-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Who We Are</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Student Gymkhana</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The IIITV Gymkhana is the student government body that represents the diverse interests and
                  aspirations of the student community at IIIT Vadodara. We are committed to fostering a vibrant campus
                  life, promoting student welfare, and empowering our peers to reach new heights.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="clubs" className="py-12 md:py-24 px-6 bg-muted">
          <div className="container mx-auto space-y-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">Our Committees</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Committees</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the diverse range of committees under the Student Gymkhana, each dedicated to enriching
                  student
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Club 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Tech Committee</h3>
                  <p className="text-muted-foreground mt-2">
                    Explore the latest technologies and build innovative projects.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Club 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Cultural Committee</h3>
                  <p className="text-muted-foreground mt-2">Celebrate the diverse cultures and traditions of IIITV.</p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Club 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Sports Committee</h3>
                  <p className="text-muted-foreground mt-2">Engage in a variety of sports and fitness activities.</p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Club 4"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Academic Committee</h3>
                  <p className="text-muted-foreground mt-2">
                    Enhance academic excellence and support student learning.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto space-y-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Gymkhana Leadership</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Gymkhana Teams</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The IIITV Gymkhana is led by dedicated student representatives across various teams.
                </p>
              </div>
            </div>
            <Tabs defaultValue="executive" className="mt-8">
              <TabsList className="flex justify-center gap-4 mb-6 bg-white">
                <TabsTrigger value="executive">Executive Team</TabsTrigger>
                <TabsTrigger value="events">Events Team</TabsTrigger>
                <TabsTrigger value="activities">Activities Team</TabsTrigger>
                <TabsTrigger value="outreach">Outreach Team</TabsTrigger>
              </TabsList>
              <TabsContent value="executive">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Team Member"
                      className="w-full h-[300px] object-cover object-center"
                    />
                    <div className="p-6 space-y-2">
                      <h4 className="text-lg font-bold">John Doe</h4>
                      <p className="text-muted-foreground">President</p>
                      <Button variant="outline" className="w-full">
                        Email
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Team Member"
                      className="w-full h-[300px] object-cover object-center"
                    />
                    <div className="p-6 space-y-2">
                      <h4 className="text-lg font-bold">Sarah Adams</h4>
                      <p className="text-muted-foreground">Vice President</p>
                      <Button variant="outline" className="w-full">
                        Email
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Team Member"
                      className="w-full h-[300px] object-cover object-center"
                    />
                    <div className="p-6 space-y-2">
                      <h4 className="text-lg font-bold">Michael Kim</h4>
                      <p className="text-muted-foreground">Secretary</p>
                      <Button variant="outline" className="w-full">
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="events">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Team Member"
                      className="w-full h-[300px] object-cover object-center"
                    />
                    <div className="p-6 space-y-2">
                      <h4 className="text-lg font-bold">Emily Chen</h4>
                      <p className="text-muted-foreground">Events Coordinator</p>
                      <Button variant="outline" className="w-full">
                        Email
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Team Member"
                      className="w-full h-[300px] object-cover object-center"
                    />
                    <div className="p-6 space-y-2">
                      <h4 className="text-lg font-bold">Mia Chinaar</h4>
                      <p className="text-muted-foreground">Sponsorship Lead</p>
                      <Button variant="outline" className="w-full">
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="activities">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Team Member"
                      className="w-full h-[300px] object-cover object-center"
                    />
                    <div className="p-6 space-y-2">
                      <h4 className="text-lg font-bold">Emily Chen</h4>
                      <p className="text-muted-foreground">Events Coordinator</p>
                      <Button variant="outline" className="w-full">
                        Email
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Team Member"
                      className="w-full h-[300px] object-cover object-center"
                    />
                    <div className="p-6 space-y-2">
                      <h4 className="text-lg font-bold">Los Engela</h4>
                      <p className="text-muted-foreground">Sponsorship Lead</p>
                      <Button variant="outline" className="w-full">
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="outreach">
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Team Member"
                      className="w-full h-[300px] object-cover object-center"
                    />
                    <div className="p-6 space-y-2">
                      <h4 className="text-lg font-bold">Emily Chen</h4>
                      <p className="text-muted-foreground">Events Coordinator</p>
                      <Button variant="outline" className="w-full">
                        Email
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Team Member"
                      className="w-full h-[300px] object-cover object-center"
                    />
                    <div className="p-6 space-y-2">
                      <h4 className="text-lg font-bold">Chu Chin</h4>
                      <p className="text-muted-foreground">Sponsorship Lead</p>
                      <Button variant="outline" className="w-full">
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="bg-muted w-full py-12 px-2 md:py-24 lg:py-32">
          <div className="container mx-auto space-y-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm"> Explore Our Events</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Exciting Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the diverse range of events organized by the IIITV Gymkhana, from cultural celebrations to
                  technical workshops.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Event 1"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">
                    Technical
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Cerebro</h3>
                  <p className="text-muted-foreground mt-2">
                    Explore the latest technologies and participate in exciting competitions.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">April 15, 2023</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Event 2"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">
                    Cultural | Academics
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Kreiva X Alfaaz</h3>
                  <p className="text-muted-foreground mt-2">
                    Celebrate the diverse cultures and traditions of IIITV with music, dance, and food.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">May 20, 2023</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    width={600}
                    height={400}
                    alt="Event 3"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">
                    Sports
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Ventura</h3>
                  <p className="text-muted-foreground mt-2">
                    Compete in a variety of sports and showcase your athletic talents.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">June 10, 2023</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        ,{" "}
        <section className="py-12 md:py-24 px-6">
          <div className="container mx-auto">
            <blockquote className="text-center text-2xl font-medium italic">
              "To be creative means to be in love with life. You can be creative only if you love life enough that you
              want to enhance its beauty, you want to bring a little more music to it, a little more poetry to it, a
              little more dance to it."
            </blockquote>
            <div className="mt-6 text-center text-muted-foreground">- Osho</div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Student Gymkhana | Dot</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}