import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Facebook, Instagram, Youtube } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  DIY Electronic Projects
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Robotics and Energy&apos;s electronic projects provide step-by-step guidance and detailed instructions
                  on how to create different electronic projects.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>A video showcasing the project</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>A list of components needed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Hardware and software details</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Information on what can be learned</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Everything you need to acquire the knowledge to build the project yourself</span>
                </li>
              </ul>
              <div className="mt-4">
                <p className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400">
                  Create your own unique electronic project that suits your style and needs. You can assist yourself by
                  following the steps detailed in our projects if necessary.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Projects
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-video overflow-hidden rounded-xl border bg-gray-100 dark:bg-gray-800 shadow-lg">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  width={600}
                  height={400}
                  alt="DIY Electronics Project"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Our Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover our collection of DIY electronic projects with detailed instructions and guides.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 md:gap-8">
            <Card className="overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Arduino web server LED control project"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold">Arduino web server LED control project</CardTitle>
                <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
                  A web-based LED control project using Arduino! With the help of this project, you will be able to
                  create a web-based interface for controlling LEDs with an Arduino.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  View Project
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Robotic arm with Arduino project"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold">Robotic arm with Arduino project</CardTitle>
                <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
                  Arduino and servo motors robotic arm project. Creating a working robotic arm that can catch and move
                  different objects. From hardware to software, everything will be explained.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  View Project
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="PC repair assistant"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold">PC repair assistant</CardTitle>
                <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
                  Get to know and master the world of computer problem diagnostics to identify and fix broken PC issues.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  View Project
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Web-Controlled RGB LED Light Strip"
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold">
                  Web-Controlled RGB LED Light Strip: DIY Arduino Project
                </CardTitle>
                <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
                  Arduino-controlled RGB LED strip accessible through a local network interface, allowing control from
                  any smart device, including your phone.
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  View Project
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Arduino for Electronic Projects</h2>
              <p className="text-gray-500 md:text-lg/relaxed dark:text-gray-400">
                A combination of the following characteristics – ease of use, large community of support, affordability,
                cross-platform compatibility, and a huge ecosystem of shields and modules makes Arduino the most popular
                choice nowadays among beginners that are trying to learn about microcontrollers and create electronic
                DIY type projects. Follow our projects and see how we made it work.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Advanced Electronic Projects with Raspberry Pi
              </h2>
              <p className="text-gray-500 md:text-lg/relaxed dark:text-gray-400">
                Raspberry Pi is amazing for some DIY electronic projects, it is a powerful and a versatile single-board
                computer that can handle more complex tasks than Arduino. However Raspberry Pi requires more power and
                may be more difficult to use for beginners, since it requires more knowledge of operating systems and
                programming. Learn more about Raspberry pi by following our projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-white dark:bg-gray-950">
        <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-6 md:px-0">
            <Link href="/" className="flex items-center justify-center gap-1 text-lg font-semibold">
              <span>Robotics and Energy</span>
            </Link>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                About Us
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact Us
              </Link>
              <Link href="/sitemap" className="text-sm font-medium hover:underline underline-offset-4">
                Sitemap
              </Link>
            </nav>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/Roboticsandenergy"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/robotics.and.energy/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCF2FWCLEGkXbDmjMDgRL7Ow"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div className="border-t py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Robotics and Energy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 