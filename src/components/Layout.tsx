
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { Home, Store, User, Settings, Users, Bell } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"

const sidebarItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Store, label: "Shops", href: "/shops" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Users, label: "My Network", href: "/network" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Settings, label: "Settings", href: "/settings" }
]

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleNavigation = (href: string) => {
    if (href === '/') {
      navigate(href)
      return
    }
    
    // Show toast for inactive pages
    toast({
      title: "Page Not Available",
      description: "This feature is coming soon!",
      variant: "default"
    })
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton asChild>
                        <a 
                          onClick={(e) => {
                            e.preventDefault()
                            handleNavigation(item.href)
                          }} 
                          href={item.href}
                          className="flex items-center gap-2"
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Layout
