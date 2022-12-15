var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/#Public","page":"API","title":"Public","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [WebDriver]\nPrivate = false","category":"page"},{"location":"api/#WebDriver.WebDriver","page":"API","title":"WebDriver.WebDriver","text":"WebDriver\n\nA binding for the WebDriver and JSON Wire Protocol for the Julia programing language compatible with the Selenium WebDriver.\n\nRepository\n\nExample\n\njulia> using WebDriver\n\n\n\n\n\n","category":"module"},{"location":"api/#WebDriver.Capabilities","page":"API","title":"WebDriver.Capabilities","text":"Capabilities(browserName::AbstractString;\n             browserVersion::AbstractString = \"\",\n             platformName::AbstractString = \"\",\n             acceptInsecureCerts::Union{Nothing, Bool} = nothing,\n             pageLoadStrategy::AbstractString = \"\",\n             proxy::Union{Nothing, Proxy} = nothing,\n             setWindowRect::Union{Nothing, Bool} = nothing,\n             timeouts::Timeouts = Timeouts(),\n             strictFileInteractability::Union{Nothing, Bool} = nothing,\n             unhandledPromptBehavior::AbstractString = \"dismiss and notify\"\n             )::Capabilities\n\nAccording to W3C.\n\nExample\n\njulia> capabilities = Capabilities(\"chrome\")\nRemote WebDriver Capabilities\nbrowserName: chrome\n\n\n\n\n\n","category":"type"},{"location":"api/#WebDriver.Cookie","page":"API","title":"WebDriver.Cookie","text":"Cookie(obj)::Cookie\nCookie(name::AbstractString, value;\n       path::AbstractString = \"/\",\n       domain::Union{Nothing, AbstractString} = nothing,\n       secure::Bool = false,\n       httpOnly::Bool = false,\n       expiry::Union{Nothing, Integer, DateTime} = nothing)::Cookie\n\nA cookie per W3C.\n\n\n\n\n\n","category":"type"},{"location":"api/#WebDriver.Element","page":"API","title":"WebDriver.Element","text":"Element(session::Session, location_strategy::AbstractString, value::AbstractString)::Element\nElement(element::Element, location_strategy::AbstractString, value::AbstractString)::Element\n\nThe Find Element command is used to find an element in the current browsing context that can be used as the web element context for future element-centric commands.\n\nMay use a location strategy from \"css selector\", \"link text\", \"partial link text\", \"tag name\" or \"xpath\".\n\njulia> capabilities = Capabilities(\"chrome\")\nRemote WebDriver Capabilities\nbrowserName: chrome\njulia> wd = RemoteWebDriver(capabilities, host = ENV[\"WEBDRIVER_HOST\"], port = parse(Int, ENV[\"WEBDRIVER_PORT\"]))\nRemote WebDriver\njulia> session = Session(wd)\nSession\njulia> isa(session, Session)\ntrue\njulia> delete!(session);\n\n\n\n\n\n","category":"type"},{"location":"api/#WebDriver.Proxy","page":"API","title":"WebDriver.Proxy","text":"Proxy(proxyType::AbstractString;\n      proxyAutoconfigUrl::Union{Nothing, AbstractString} = nothing,\n      ftpProxy::Union{Nothing, AbstractString} = nothing,\n      httpProxy::Union{Nothing, AbstractString} = nothing,\n      noProxy::Union{Nothing, AbstractVector{<:AbstractString}} = nothing,\n      sslProxy::Union{Nothing, AbstractString} = nothing,\n      socksProxy::Union{Nothing, AbstractString} = nothing,\n      socksVersion::Union{Nothing, Integer} = nothing)::Proxy\n\nThe proxy configuration capability is a JSON Object nested within the primary capabilities. According to the W3C.\n\n\n\n\n\n","category":"type"},{"location":"api/#WebDriver.RemoteWebDriver","page":"API","title":"WebDriver.RemoteWebDriver","text":"RemoteWebDriver(capabilities::Capabilities;\n                host::AbstractString = \"localhost\",\n                port::Integer = 4444,\n                path::AbstractString = \"\",\n\t\t\t\tkwargs...)::RemoteWebDriver\n\nSpecifies a remote web driver according to W3C.\n\njulia> capabilities = Capabilities(\"chrome\")\nRemote WebDriver Capabilities\nbrowserName: chrome\njulia> wd = RemoteWebDriver(capabilities, host = ENV[\"WEBDRIVER_HOST\"], port = parse(Int, ENV[\"WEBDRIVER_PORT\"]))\nRemote WebDriver\njulia> status(wd) # Ready to accept new sessions?\ntrue\n\n\n\n\n\n","category":"type"},{"location":"api/#WebDriver.Session","page":"API","title":"WebDriver.Session","text":"Session\n\nThis is a web session.\n\njulia> capabilities = Capabilities(\"chrome\")\nRemote WebDriver Capabilities\nbrowserName: chrome\njulia> wd = RemoteWebDriver(capabilities, host = ENV[\"WEBDRIVER_HOST\"], port = parse(Int, ENV[\"WEBDRIVER_PORT\"]))\nRemote WebDriver\njulia> session = Session(wd)\nSession\njulia> isa(session, Session)\ntrue\njulia> delete!(session);\n\n\n\n\n\n\n","category":"type"},{"location":"api/#WebDriver.Timeouts","page":"API","title":"WebDriver.Timeouts","text":"Timeouts\n\nAccording to the W3C.\n\njulia> Timeouts(script = 50_000, pageLoad = 100_000, implicit = 5)\nSession Timeouts -- script: 50000, pageLoad: 100000, implicit: 5\n\n\n\n\n\n","category":"type"},{"location":"api/#WebDriver.WDError","page":"API","title":"WebDriver.WDError","text":"WDError <: Exception\n\nA Web Driver Exception.\n\n\n\n\n\n","category":"type"},{"location":"api/#Base.delete!-Tuple{Session, AbstractString}","page":"API","title":"Base.delete!","text":"delete!(session::Session, cookie::AbstractString)::Nothing\n\nIf cookie = \"\", delete all cookies. Otherwise, delete cookie matching the \"cookie\" name.\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.delete!-Tuple{Session}","page":"API","title":"Base.delete!","text":"delete!(session::Session)\n\nDeletes the session from the Remote Driver.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.Elements-Tuple{Element, AbstractString, AbstractString}","page":"API","title":"WebDriver.Elements","text":"Elements(element::Element, location_strategy::AbstractString, value::AbstractString)::Vector{Element}\n\nFind Elements\n\nSee also: Element\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.Elements-Tuple{Session, AbstractString, AbstractString}","page":"API","title":"WebDriver.Elements","text":"Elements(session::Session, location_strategy::AbstractString, value::AbstractString)::Vector{Element}\n\nFind Elements\n\nSee also: Element\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.accept-Tuple{Session}","page":"API","title":"WebDriver.accept","text":"accept(session::Session)::Nothing\n\nAccepts the currently displayed alert dialog.\n\nnote: Note\nThis command uses the JSON Wire Protocol instead of the current W3c WebDriver API.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.active_element-Tuple{Session}","page":"API","title":"WebDriver.active_element","text":"active_element(session::Session)::Element\n\nGet Active Element\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.alert_text!-Tuple{Session, AbstractString}","page":"API","title":"WebDriver.alert_text!","text":"alert_text!(session::Session, text::AbstractString)::Nothing\n\nSends keystrokes to a JavaScript prompt() dialog.\n\nnote: Note\nThis command uses the JSON Wire Protocol instead of the current W3c WebDriver API.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.alert_text-Tuple{Session}","page":"API","title":"WebDriver.alert_text","text":"alert_text(session::Session)::String\n\nGets the text of the currently displayed JavaScript alert(), confirm(), or prompt() dialog.\n\nnote: Note\nThis command uses the JSON Wire Protocol instead of the current W3c WebDriver API.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.back!-Tuple{Session}","page":"API","title":"WebDriver.back!","text":"back!(session::Session)\n\nThis command causes the browser to traverse one step backward in the joint session history of the current top-level browsing context. This is equivalent to pressing the back button in the browser chrome or invoking window.history.back.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.clear!-Tuple{Element}","page":"API","title":"WebDriver.clear!","text":"clear!(element::Element)::Nothing\n\nElement Clear\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.click!-Tuple{Element}","page":"API","title":"WebDriver.click!","text":"click!(element::Element)::Nothing\n\nThe Element Click command scrolls into view the element if it is not already pointer-interactable, and clicks its in-view center point. If the element’s center point is obscured by another element, an element click intercepted error is returned. If the element is outside the viewport, an element not interactable error is returned.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.cookie!-Tuple{Session, Cookie}","page":"API","title":"WebDriver.cookie!","text":"cookie!(session::Session, cookie::Cookie)::Nothing\n\nAdd Cookie.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.cookie-Tuple{Session, AbstractString}","page":"API","title":"WebDriver.cookie","text":"cookie(session::Session, cookie::AbstractString)::Cookie\n\nGet Named Cookie.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.cookies-Tuple{Session}","page":"API","title":"WebDriver.cookies","text":"cookies(session::Session)::Vector{Cookie}\n\nThe Get Page Source command returns a string serialization of the DOM of the current browsing context active document.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.current_url-Tuple{Session}","page":"API","title":"WebDriver.current_url","text":"current_url(session::Session)::String\n\nGet Current URL.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.dismiss-Tuple{Session}","page":"API","title":"WebDriver.dismiss","text":"dismiss(session::Session)::Nothing\n\nDismisses the currently displayed alert dialog.\n\nnote: Note\nThis command uses the JSON Wire Protocol instead of the current W3c WebDriver API.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.document_title-Tuple{Session}","page":"API","title":"WebDriver.document_title","text":"document_title(session::Session)::String\n\nThis command returns the document title of the current top-level browsing context, equivalent to calling document.title.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.element_attr-Tuple{Element, AbstractString}","page":"API","title":"WebDriver.element_attr","text":"element_attr(element::Element, attribute::AbstractString)\n\nGet Element Attribute.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.element_css-Tuple{Element, AbstractString}","page":"API","title":"WebDriver.element_css","text":"element_css(element::Element, value::AbstractString)\n\nGet Element CSS Value\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.element_keys!-Tuple{Element, AbstractString}","page":"API","title":"WebDriver.element_keys!","text":"clear!(element::Element)::Nothing\n\nThe Element Send Keys command scrolls into view the form control element and then sends the provided keys to the element. In case the element is not keyboard-interactable, an element not interactable error is returned.\n\nnote: Note\nKeyboard keys are not implemented yet.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.element_property-Tuple{Element, AbstractString}","page":"API","title":"WebDriver.element_property","text":"element_property(element::Element, property::AbstractString)\n\nGet Element Property.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.element_tag-Tuple{Element}","page":"API","title":"WebDriver.element_tag","text":"element_tag(element::Element)::String\n\nGet Element Tag Name.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.element_text-Tuple{Element}","page":"API","title":"WebDriver.element_text","text":"element_text(element::Element)::String\n\nThe Get Element Text command intends to return an element’s text \"as rendered\". An element's rendered text is also used for locating a elements by their link text and partial link text.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.forward!-Tuple{Session}","page":"API","title":"WebDriver.forward!","text":"forward!(session::Session)\n\nThis command causes the browser to traverse one step forwards in the joint session history of the current top-level browsing context.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.frame!","page":"API","title":"WebDriver.frame!","text":"frame!(frame::Element)::Nothing\n\nThe Switch To Frame command is used to select the current top-level browsing context or a child browsing context of the current browsing context to use as the current browsing context for subsequent commands.\n\n\n\n\n\n","category":"function"},{"location":"api/#WebDriver.isenabled-Tuple{Element}","page":"API","title":"WebDriver.isenabled","text":"isenabled(element::Element)::Bool\n\nIs Element Enabled.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.isselected-Tuple{Element}","page":"API","title":"WebDriver.isselected","text":"isselected(element::Element)::Bool\n\nThe Is Element Selected command determines if the referenced element is selected or not. This operation only makes sense on input elements of the Checkbox and Radio Button states, or on option elements.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.maximize!-Tuple{Session}","page":"API","title":"WebDriver.maximize!","text":"maximize!(session::Session; window::AbstractString = \"current\")::Dict{String,Int}\n\nThe Maximize Window command invokes the window manager-specific \"maximize\" operation, if any, on the window containing the current top-level browsing context. This typically increases the window to the maximum available size without going full-screen.\n\nnote: Note\nThis command is implemented using the JSON Wire Protocol.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.minimize!-Tuple{Session}","page":"API","title":"WebDriver.minimize!","text":"minimize!(session::Session; window::AbstractString = \"current\")::NamedTuple{(:width, :height, :x, :y),NTuple{4,Int64}}\n\nThe Minimize Window command invokes the window manager-specific \"minimize\" operation, if any, on the window containing the current top-level browsing context. This typically hides the window in the system tray.\n\nnote: Note\nThis command is implemented using the JSON Wire Protocol.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.moveto!-Tuple{Session}","page":"API","title":"WebDriver.moveto!","text":"moveto!(session::Session; x::Integer = 0, y::Integer = 0)\nmoveto!(element::Element; x::Integer = 0, y::Integer = 0)\n\nMove the mouse by an offset of the specificed element.\n\nnote: Note\nThis command uses the JSON Wire Protocol instead of the current W3c WebDriver API.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.navigate!-Tuple{Session, AbstractString}","page":"API","title":"WebDriver.navigate!","text":"navigate!(session::Session, url::AbstractString)\n\nThe command causes the user agent to navigate the current top-level browsing context to a new location.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.parent_frame!-Tuple{Session}","page":"API","title":"WebDriver.parent_frame!","text":"parent_frame!(session::Session)::Nothing\n\nThe Switch to Parent Frame command sets the current browsing context for future commands to the parent of the current browsing context.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.rect","page":"API","title":"WebDriver.rect","text":"rect(session::Session; window::AbstractString = \"current\")::NamedTuple{(:width, :height, :x, :y),NTuple{4,Int64}}\n\nThe Get Window Rect command returns the size and position on the screen of the operating system window corresponding to the current top-level browsing context.\n\n\n\n\n\n","category":"function"},{"location":"api/#WebDriver.rect!-Tuple{Session}","page":"API","title":"WebDriver.rect!","text":"rect!(session::Session;\n      window::AbstractString = \"current\",\n      width::Union{Nothing, Real} = nothing,\n      height::Union{Nothing, Real} = nothing\n     )::NamedTuple{(:width, :height, :x, :y),NTuple{4,Int64}}\n\nThe Set Window Rect command alters the size and the position of the operating system window corresponding to the current top-level browsing context.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.rect-Tuple{Element}","page":"API","title":"WebDriver.rect","text":"rect(element::Element)::NamedTuple{(:width, :height, :x, :y),NTuple{4,Int64}}\n\nThe Get Element Rect command returns the dimensions and coordinates of the given web element. The returned value is a dictionary with the following members:\n\nx: X axis position of the top-left corner of the web element relative to the current browsing context’s document element in CSS pixels.\ny: Y axis position of the top-left corner of the web element relative to the current browsing context’s document element in CSS pixels.\nheight: Height of the web element’s bounding rectangle in CSS pixels.\nwidth: Width of the web element’s bounding rectangle in CSS pixels.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.refresh!-Tuple{Session}","page":"API","title":"WebDriver.refresh!","text":"refresh!(session::Session)\n\nThis command causes the browser to reload the page in the current top-level browsing context.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.screenshot","page":"API","title":"WebDriver.screenshot","text":"screenshot(session::Session)::String\nscreenshot(element::Element)::String\nscreenshot(source::Union{Session, Element}, sink::Union{AbstractString, IO})\n\nTake Screenshot and optionally saves it.\n\n\n\n\n\n","category":"function"},{"location":"api/#WebDriver.script!-Tuple{Session, AbstractString, Vararg{Any}}","page":"API","title":"WebDriver.script!","text":"script!(session::Session, script::AbstractString, args...; async::Bool = false)\n\nExecutes JavaScript (sync / async)\n\nnote: Note\nThis command uses the JSON Wire Protocol instead of the current W3c WebDriver API.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.sessions-Tuple{RemoteWebDriver}","page":"API","title":"WebDriver.sessions","text":"sessions(wd::RemoteWebDriver)\n\nReturns a list of the currently active sessions.\n\nnote: Note\nThis is a JSON Wire Protocol functionality.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.source-Tuple{Session}","page":"API","title":"WebDriver.source","text":"source(session::Session)::String\n\nThe Get Page Source command returns a string serialization of the DOM of the current browsing context active document.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.status-Tuple{RemoteWebDriver}","page":"API","title":"WebDriver.status","text":"status(wd::WebDriver)::Bool\n\nReturns true if the server is running and ready to accept new sessions.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.timeouts!-Tuple{Session, Timeouts}","page":"API","title":"WebDriver.timeouts!","text":"timeouts!(session::Session, timeouts::Timeouts)::Nothing\n\nSets the timeouts.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.timeouts-Tuple{Session}","page":"API","title":"WebDriver.timeouts","text":"timeouts(session::Session)\n\nGet the timeouts according to webdriver2. Currently not supported by Selenium.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.window!-Tuple{Session, AbstractString}","page":"API","title":"WebDriver.window!","text":"window!(session::Session, handle::AbstractString)\n\nThe window handle associated with the current top-level browsing context.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.window!-Tuple{Session}","page":"API","title":"WebDriver.window!","text":"window!(session::Session)\n\nCreate a new top-level browsing context.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.window_close!-Tuple{Session}","page":"API","title":"WebDriver.window_close!","text":"window_close!(session::Session)::Nothing\n\nThe window handle associated with the current top-level browsing context.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.window_handle-Tuple{Session}","page":"API","title":"WebDriver.window_handle","text":"window_handle(session::Session)::String\n\nThe window handle associated with the current top-level browsing context.\n\n\n\n\n\n","category":"method"},{"location":"api/#WebDriver.window_handles-Tuple{Session}","page":"API","title":"WebDriver.window_handles","text":"window_handles(session::Session)::Vector{String}\n\nSwitching window will select the current top-level browsing context used as the target for all subsequent commands. In a tabbed browser, this will typically make the tab containing the browsing context the selected tab.\n\n\n\n\n\n","category":"method"},{"location":"api/#Private","page":"API","title":"Private","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [WebDriver]\nPublic = false","category":"page"},{"location":"manual/#Manual","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"manual/#Getting-Started","page":"Manual","title":"Getting Started","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"You should first find a remote web driver for the package to connect.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"For example, you could use a Docker image for spinning a container for a remote web driver such as","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"docker run -d -p 4444:4444 --name selenium selenium/standalone-chrome","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"which will run the Selenium standalone Google Chrome web driver.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We can connect to it from WebDriver.jl through the following steps,","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We specify the requested web driver capabilities. The required argument being the browser name (chrome).","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"ENV[\"WEBDRIVER_HOST\"] = get(ENV, \"WEBDRIVER_HOST\", \"selenium\")\nENV[\"WEBDRIVER_PORT\"] = get(ENV, \"WEBDRIVER_PORT\", \"4444\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"using WebDriver\ncapabilities = Capabilities(\"chrome\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We specify the remote driver we want to connect to,","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"The host will likely be localhost or the name of the container if in a container network (e.g., selenium).","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"The port will be that being exposed which by default is 4444. In the example, above we mapped the container to listen at the port 4444.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"wd = RemoteWebDriver(capabilities, host = ENV[\"WEBDRIVER_HOST\"], port = parse(Int, ENV[\"WEBDRIVER_PORT\"]))","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Lastly, we can start a session in the webdriver.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"status(wd) # Will check if server is running and available for new sessions","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"sessions(wd) # All active sessions","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"session = Session(wd) # Will create a new session","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"The session we just created is now active","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"sessions(wd)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"After performing operations with that session, you may close it with","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"delete!(session)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We can confirm that the session was actually deleted.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"sessions(wd)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"For the following section, feel free to follow up the session actions in your browser.","category":"page"},{"location":"manual/#Navigation","page":"Manual","title":"Navigation","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"ENV[\"WEBDRIVER_HOST\"] = get(ENV, \"WEBDRIVER_HOST\", \"selenium\")\nENV[\"WEBDRIVER_PORT\"] = get(ENV, \"WEBDRIVER_PORT\", \"4444\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"using WebDriver\ncapabilities = Capabilities(\"chrome\")\nwd = RemoteWebDriver(capabilities, host = ENV[\"WEBDRIVER_HOST\"], port = parse(Int, ENV[\"WEBDRIVER_PORT\"]))\nsession = Session(wd)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We can query the current URL","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"current_url(session)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We can navigate to a different URL","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"navigate!(session, \"http://thedemosite.co.uk/addauser.php\")\ncurrent_url(session)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We can go back","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"back!(session)\ncurrent_url(session)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We can go forward","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"forward!(session)\ncurrent_url(session)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We can refresh","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"refresh!(session);","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"delete!(session)","category":"page"},{"location":"manual/#Elements","page":"Manual","title":"Elements","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"ENV[\"WEBDRIVER_HOST\"] = get(ENV, \"WEBDRIVER_HOST\", \"selenium\")\nENV[\"WEBDRIVER_PORT\"] = get(ENV, \"WEBDRIVER_PORT\", \"4444\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"using WebDriver\ncapabilities = Capabilities(\"chrome\")\nwd = RemoteWebDriver(capabilities, host = ENV[\"WEBDRIVER_HOST\"], port = parse(Int, ENV[\"WEBDRIVER_PORT\"]))\nsession = Session(wd)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We can find the active element","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"active_element(session)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We can find an element based on css selector, link text, partial link text, tag name or xpath","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"navigate!(session, \"http://book.theautomatedtester.co.uk/chapter1\")\nselecttype = Element(session, \"xpath\", \"\"\"//select[@id='selecttype']\"\"\") # Find first element","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"selecttypes = Elements(session, \"xpath\", \"\"\"//select[@id='selecttype']\"\"\") # Find all elements","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"t1selenium = Element(selecttype, \"xpath\", \"\"\"//option[@value='Selenium IDE']\"\"\") # Find Element From Element","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"tsselenium = Elements(selecttype, \"xpath\", \"\"\"//option\"\"\") # Find Elements from Element","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We can query elements for attributes, properties, tag, text, css values, dimensions, etc.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"element_attr(t1selenium, \"value\") # Get Element Attribute","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"element_property(t1selenium, \"value\") # Get Element Property","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"element_css(selecttype, \"font-size\") # Get Element CSS Value","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"element_text(t1selenium) # Get Element Text","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"element_tag(selecttype) # Get Element Tag Name","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"rect(selecttype) # Get Element Rect","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"isenabled(selecttype) # Is the element enabled","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Clicking elements","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"radiobutton = Element(session, \"xpath\", \"\"\"//input[@id='radiobutton']\"\"\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"element_property(radiobutton, \"checked\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"click!(radiobutton) # Element Click","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"element_property(radiobutton, \"checked\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Text boxes","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"text_box = Element(session, \"xpath\", \"\"\"//*[@id='html5div']\"\"\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"element_text(text_box)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"clear!(text_box) # Element Clear\nelement_text(text_box)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"element_keys!(text_box, \"All your base are belong to us\") # Element Send Keys\nelement_text(text_box)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"delete!(session) # hide","category":"page"},{"location":"manual/#Page-Source","page":"Manual","title":"Page Source","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"ENV[\"WEBDRIVER_HOST\"] = get(ENV, \"WEBDRIVER_HOST\", \"selenium\")\nENV[\"WEBDRIVER_PORT\"] = get(ENV, \"WEBDRIVER_PORT\", \"4444\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"using WebDriver, Gumbo, Cascadia\ncapabilities = Capabilities(\"chrome\")\nwd = RemoteWebDriver(capabilities, host = ENV[\"WEBDRIVER_HOST\"], port = parse(Int, ENV[\"WEBDRIVER_PORT\"]))\nsession = Session(wd)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"navigate!(session, \"http://book.theautomatedtester.co.uk/chapter1\")\nhtml = parsehtml(source(session))\neachmatch(Selector(\"#selecttype\"), html.root)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"delete!(session) # hide","category":"page"},{"location":"manual/#Execute-Script","page":"Manual","title":"Execute Script","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"ENV[\"WEBDRIVER_HOST\"] = get(ENV, \"WEBDRIVER_HOST\", \"selenium\")\nENV[\"WEBDRIVER_PORT\"] = get(ENV, \"WEBDRIVER_PORT\", \"4444\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"using WebDriver, Gumbo, Cascadia\ncapabilities = Capabilities(\"chrome\")\nwd = RemoteWebDriver(capabilities, host = ENV[\"WEBDRIVER_HOST\"], port = parse(Int, ENV[\"WEBDRIVER_PORT\"]))\nsession = Session(wd)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"navigate!(session, \"http://book.theautomatedtester.co.uk/chapter1\")\nselecttype = Element(session, \"xpath\", \"\"\"//select[@id='selecttype']\"\"\")\nelement_attr(selecttype, \"value\") == \"Selenium IDE\"","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"script!(session, \"arguments[0].value = arguments[1];\", selecttype, \"Selenium Grid\")\nelement_attr(selecttype, \"value\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"delete!(session) # hide","category":"page"},{"location":"manual/#Cookies","page":"Manual","title":"Cookies","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"ENV[\"WEBDRIVER_HOST\"] = get(ENV, \"WEBDRIVER_HOST\", \"selenium\")\nENV[\"WEBDRIVER_PORT\"] = get(ENV, \"WEBDRIVER_PORT\", \"4444\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"using WebDriver, Gumbo, Cascadia\ncapabilities = Capabilities(\"chrome\")\nwd = RemoteWebDriver(capabilities, host = ENV[\"WEBDRIVER_HOST\"], port = parse(Int, ENV[\"WEBDRIVER_PORT\"]))\nsession = Session(wd)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Find all cookies","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"navigate!(session, \"http://book.theautomatedtester.co.uk/chapter8\")\nlength(cookies(session))","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Get Named Cookie","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"second_cookie = Element(session, \"xpath\", \"//input[@id='secondCookie']\")\nclick!(second_cookie)\ncookie(session, \"visitorCount\").name","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Add a cookie","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"cookie!(session, Cookie(\"WhoIsAwesome\", \"ME!\"))\ncookie(session, \"WhoIsAwesome\").value","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Delete Cookie","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"delete!(session, \"WhoIsAwesome\") # Deletes cookie of that name\ndelete!(session, \"\") # Deletes all cookies\nlength(cookies(session))","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"delete!(session)","category":"page"},{"location":"manual/#More-Advanced-Features","page":"Manual","title":"More Advanced Features","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"This will go over user prompts, hoverover / move pointer to, changing frames, and screenshots","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"Let us first hover over and accept a user-prompt.","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"ENV[\"WEBDRIVER_HOST\"] = get(ENV, \"WEBDRIVER_HOST\", \"selenium\")\nENV[\"WEBDRIVER_PORT\"] = get(ENV, \"WEBDRIVER_PORT\", \"4444\")","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"using WebDriver\ncapabilities = Capabilities(\"chrome\")\nwd = RemoteWebDriver(capabilities, host = ENV[\"WEBDRIVER_HOST\"], port = parse(Int, ENV[\"WEBDRIVER_PORT\"]))\nsession = Session(wd)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"navigate!(session, \"http://book.theautomatedtester.co.uk/chapter4\")\nhoverOver = Element(session, \"xpath\", \"//*[@id='hoverOver']\")\nmoveto!(hoverOver)\nalert_text(session)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"accept(session) # dismiss(session) would have also worked","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"We can also switch frames as in the following example,","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"navigate!(session, \"https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt\")\nbutton = Element(session, \"css selector\", \"body > div.trytopnav > div > button\")\nclick!(button)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"example_frame = Element(session, \"xpath\", \"//*[@name='iframeResult']\")\nframe!(example_frame)\nbutton = Element(session, \"xpath\", \"/html/body/button\")\nclick!(button)\nalert_text(session)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"alert_text!(session, \"Nosferican\")\naccept(session)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"my_name = Element(session, \"xpath\", \"//*[@id='demo']\")\nelement_text(my_name)","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"using Base64\nss = write(joinpath(@__DIR__, \"img.png\"), base64decode(screenshot(session)))","category":"page"},{"location":"manual/","page":"Manual","title":"Manual","text":"delete!(session)","category":"page"},{"location":"manual/#More-Features","page":"Manual","title":"More Features","text":"","category":"section"},{"location":"manual/","page":"Manual","title":"Manual","text":"For more features, take a look at the API.","category":"page"},{"location":"#WebDriver.jl","page":"Home","title":"WebDriver.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A WebDriver / JSON Wire Protocol Binding Compatible with Selenium for the Julia Language.","category":"page"}]
}
