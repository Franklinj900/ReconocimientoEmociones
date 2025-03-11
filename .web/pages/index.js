/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Separator as RadixThemesSeparator, Text as RadixThemesText, TextArea as RadixThemesTextArea, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event, isTrue } from "$/utils/state"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



export function Button_9d97f5a58a97423b65f410f7ff71cca2 () {
  
  const reflex___state____state__app___app____estado_foro = useContext(StateContexts.reflex___state____state__app___app____estado_foro)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9126fc98d556b8e65be953ac4093c259 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___app____estado_foro.cambiar_pagina", ({ ["pagina"] : "analysis" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton className={("mb-2 p-3 rounded-lg font-semibold "+((reflex___state____state__app___app____estado_foro.current_page === "analysis") ? "bg-blue-500 text-white" : ((reflex___state____state__app___app____estado_foro.theme === "light") ? "bg-gray-100 text-gray-700 hover:bg-gray-200" : "bg-gray-700 text-gray-200 hover:bg-gray-600")))} css={({ ["width"] : "100%" })} onClick={on_click_9126fc98d556b8e65be953ac4093c259}>

{"An\u00e1lisis"}
</RadixThemesButton>
  )
}

export function Heading_67936b83bb70156a0109eaeaa2d9e8f4 () {
  
  const reflex___state____state__app___app____estado_foro = useContext(StateContexts.reflex___state____state__app___app____estado_foro)





  
  return (
    <RadixThemesHeading className={((reflex___state____state__app___app____estado_foro.theme === "light") ? "text-gray-800" : "text-white")} size={"5"}>

{"Men\u00fa"}
</RadixThemesHeading>
  )
}

export function Box_b0df5dfb9e5970c6662b7d65a9c7d0c6 () {
  
  const reflex___state____state__app___app____estado_foro = useContext(StateContexts.reflex___state____state__app___app____estado_foro)





  
  return (
    <RadixThemesBox css={({ ["minWidth"] : (reflex___state____state__app___app____estado_foro.sidebar_open ? "240px" : "0px"), ["width"] : (reflex___state____state__app___app____estado_foro.sidebar_open ? "240px" : "0px"), ["background"] : reflex___state____state__app___app____estado_foro.get_theme_colors["sidebar"], ["height"] : "100vh", ["position"] : "fixed", ["left"] : "0", ["top"] : "0", ["shadow"] : "lg", ["zIndex"] : "999", ["transition"] : "all 0.3s ease-in-out", ["overflowX"] : "hidden" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["padding"] : "6", ["height"] : "100%" })} direction={"column"} gap={"4"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<Heading_67936b83bb70156a0109eaeaa2d9e8f4/>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<Button_ecc258a79d7c7cd2633b7de80cfb6b0c/>
</RadixThemesFlex>
<Button_4f904792ea14439ead125270efa4c8fd/>
<Button_9d97f5a58a97423b65f410f7ff71cca2/>
</RadixThemesFlex>
</RadixThemesBox>
  )
}

export function Button_4f904792ea14439ead125270efa4c8fd () {
  
  const reflex___state____state__app___app____estado_foro = useContext(StateContexts.reflex___state____state__app___app____estado_foro)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_8274898b7c09178d5a4fc385bf81c2f4 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___app____estado_foro.cambiar_pagina", ({ ["pagina"] : "home" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton className={("mb-2 p-3 rounded-lg font-semibold "+((reflex___state____state__app___app____estado_foro.current_page === "home") ? "bg-blue-500 text-white" : ((reflex___state____state__app___app____estado_foro.theme === "light") ? "bg-gray-100 text-gray-700 hover:bg-gray-200" : "bg-gray-700 text-gray-200 hover:bg-gray-600")))} css={({ ["width"] : "100%" })} onClick={on_click_8274898b7c09178d5a4fc385bf81c2f4}>

{"Inicio"}
</RadixThemesButton>
  )
}

export function Button_ecc258a79d7c7cd2633b7de80cfb6b0c () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__app___app____estado_foro = useContext(StateContexts.reflex___state____state__app___app____estado_foro)


  const on_click_4540669439cab81472bee0d26cde32c2 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___app____estado_foro.toggle_theme", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton className={"p-2 rounded-lg"} onClick={on_click_4540669439cab81472bee0d26cde32c2}>

{((reflex___state____state__app___app____estado_foro.theme === "light") ? "\ud83c\udf19" : "\u2600\ufe0f")}
</RadixThemesButton>
  )
}

export function Fragment_cc2b9d1910c5d6ed4e2424e79e1bb7f0 () {
  
  const reflex___state____state__app___app____estado_foro = useContext(StateContexts.reflex___state____state__app___app____estado_foro)
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{isTrue((reflex___state____state__app___app____estado_foro.current_page === "home")) ? (
  <Fragment>

<RadixThemesContainer className={"max-w-4xl mx-auto p-4 sm:p-6 lg:p-8"} css={({ ["padding"] : "16px", ["paddingLeft"] : (reflex___state____state__app___app____estado_foro.sidebar_open ? "0" : "1rem") })} size={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"column"} gap={"4"}>

<RadixThemesHeading className={"text-center text-4xl font-bold my-8"} size={"8"}>

{"Blog con An\u00e1lisis de Emociones"}
</RadixThemesHeading>
<RadixThemesBox className={"mb-8"} css={({ ["padding"] : "6", ["background"] : reflex___state____state__app___app____estado_foro.get_theme_colors["card"], ["borderRadius"] : "xl", ["shadow"] : "lg", ["width"] : "100%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack w-full"} direction={"column"} gap={"3"}>

<DebounceInput className={(" "+("border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent "+((reflex___state____state__app___app____estado_foro.theme === "light") ? "bg-white text-gray-900 border-gray-300" : "bg-gray-800 text-white border-gray-600")))} css={({ ["width"] : "100%", ["paddingTop"] : "10px", ["paddingBottom"] : "10px" })} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={((_e) => (addEvents([(Event("reflex___state____state.app___app____estado_foro.actualizar_titulo", ({ ["title"] : _e["target"]["value"] }), ({  })))], [_e], ({  }))))} placeholder={"T\u00edtulo del Post"} value={reflex___state____state__app___app____estado_foro.title}/>
<DebounceInput className={(" "+("border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent "+((reflex___state____state__app___app____estado_foro.theme === "light") ? "bg-white text-gray-900 border-gray-300" : "bg-gray-800 text-white border-gray-600")))} css={({ ["width"] : "100%", ["height"] : "200px" })} debounceTimeout={300} element={RadixThemesTextArea} onChange={((_e) => (addEvents([(Event("reflex___state____state.app___app____estado_foro.actualizar_contenido", ({ ["content"] : _e["target"]["value"] }), ({  })))], [_e], ({  }))))} placeholder={"Escribe tu publicaci\u00f3n..."} value={reflex___state____state__app___app____estado_foro.content}/>
<RadixThemesButton className={"bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transform hover:scale-105 transition duration-200"} onClick={((...args) => (addEvents([(Event("reflex___state____state.app___app____estado_foro.publicar", ({  }), ({  })))], args, ({  }))))}>

{"Publicar"}
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesSeparator className={"my-8"} size={"4"}/>
<RadixThemesHeading className={"text-2xl font-semibold mb-6"} size={"6"}>

{"Publicaciones"}
</RadixThemesHeading>
<>{ reflex___state____state__app___app____estado_foro.posts.map((post, index_efe047a9acb2adad) => (
  <RadixThemesBox className={"hover:shadow-lg transition duration-200"} css={({ ["padding"] : "6", ["background"] : reflex___state____state__app___app____estado_foro.get_theme_colors["card"], ["borderRadius"] : "xl", ["shadow"] : "md", ["marginBottom"] : "4" })} key={index_efe047a9acb2adad}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "start", ["width"] : "100%" })} direction={"column"} gap={"3"}>

<RadixThemesHeading className={"text-xl font-semibold"} size={"5"}>

{post["title"]}
</RadixThemesHeading>
<RadixThemesText as={"p"} className={((reflex___state____state__app___app____estado_foro.theme === "light") ? "text-gray-700" : "text-gray-300")}>

{post["content"]}
</RadixThemesText>
<RadixThemesFlex align={"start"} className={"rx-Stack my-2"} direction={"row"} gap={"3"}>

<RadixThemesBadge className={"bg-gray-100 text-gray-800"}>

{("Emoci\u00f3n: "+post["emotion"])}
</RadixThemesBadge>
<RadixThemesBadge className={((reflex___state____state__app___app____estado_foro.theme === "light") ? "bg-gray-100 text-gray-800" : "bg-gray-700 text-gray-200")}>

{("Riesgo: "+post["suicide"])}
</RadixThemesBadge>
</RadixThemesFlex>
<RadixThemesText as={"p"} className={((reflex___state____state__app___app____estado_foro.theme === "light") ? "text-sm text-gray-500" : "text-sm text-gray-400")}>

{("\ud83d\udcc5 "+post["timestamp"]+" | \ud83d\udcdd "+post["word_count"]+" palabras")}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
))}</>
</RadixThemesFlex>
</RadixThemesContainer>
</Fragment>
) : (
  <Fragment>

<RadixThemesContainer className={"max-w-6xl mx-auto p-4 sm:p-6 lg:p-8"} css={({ ["padding"] : "16px", ["paddingLeft"] : (reflex___state____state__app___app____estado_foro.sidebar_open ? "0" : "1rem") })} size={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesHeading className={"text-center text-4xl font-bold my-8"} size={"8"}>

{"An\u00e1lisis de Actividad"}
</RadixThemesHeading>
<RadixThemesFlex css={({ ["gap"] : "6", ["width"] : "100%", ["flexWrap"] : "wrap" })}>

<RadixThemesBox className={"hover:shadow-xl transition duration-200 flex-1"} css={({ ["background"] : reflex___state____state__app___app____estado_foro.get_theme_colors["card"], ["borderRadius"] : "xl", ["shadow"] : "lg" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["padding"] : "6", ["alignItems"] : "center" })} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} className={(((reflex___state____state__app___app____estado_foro.theme === "light") ? "text-gray-600" : "text-gray-300")+" text-lg")}>

{"Total de Publicaciones"}
</RadixThemesText>
<RadixThemesText as={"p"} className={"text-4xl font-bold text-blue-500"}>

{reflex___state____state__app___app____estado_foro.total_posts}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox className={"hover:shadow-xl transition duration-200 flex-1"} css={({ ["background"] : reflex___state____state__app___app____estado_foro.get_theme_colors["card"], ["borderRadius"] : "xl", ["shadow"] : "lg" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["padding"] : "6", ["alignItems"] : "center" })} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} className={(((reflex___state____state__app___app____estado_foro.theme === "light") ? "text-gray-600" : "text-gray-300")+" text-lg")}>

{"Emoci\u00f3n Predominante"}
</RadixThemesText>
<RadixThemesText as={"p"} className={(!((reflex___state____state__app___app____estado_foro.emocion_predominante === "N/A")) ? "bg-gray-100 text-gray-800 text-4xl font-bold px-4 py-2 rounded-lg" : ("text-4xl font-bold px-4 py-2"+((reflex___state____state__app___app____estado_foro.theme === "light") ? " text-gray-600" : " text-gray-400")))}>

{reflex___state____state__app___app____estado_foro.emocion_predominante}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox className={"hover:shadow-xl transition duration-200 flex-1"} css={({ ["background"] : reflex___state____state__app___app____estado_foro.get_theme_colors["card"], ["borderRadius"] : "xl", ["shadow"] : "lg" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["padding"] : "6", ["alignItems"] : "center" })} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} className={(((reflex___state____state__app___app____estado_foro.theme === "light") ? "text-gray-600" : "text-gray-300")+" text-lg")}>

{"Promedio de Palabras"}
</RadixThemesText>
<RadixThemesText as={"p"} className={"text-4xl font-bold text-green-500"}>

{reflex___state____state__app___app____estado_foro.promedio_palabras}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
<RadixThemesSeparator className={"my-8"} size={"4"}/>
<RadixThemesHeading className={"text-2xl font-semibold my-6"} size={"6"}>

{"Historial de Publicaciones"}
</RadixThemesHeading>
<RadixThemesBox css={({ ["width"] : "100%", ["padding"] : "4", ["background"] : reflex___state____state__app___app____estado_foro.get_theme_colors["card"], ["borderRadius"] : "xl", ["shadow"] : "lg" })}>

<>{ reflex___state____state__app___app____estado_foro.posts.map((post, index_498a8e28ddbd3ba9) => (
  <RadixThemesBox className={"hover:shadow-md transition duration-200"} css={({ ["padding"] : "4", ["background"] : reflex___state____state__app___app____estado_foro.get_theme_colors["card"], ["borderRadius"] : "lg", ["shadow"] : "sm", ["marginBottom"] : "3" })} key={index_498a8e28ddbd3ba9}>

<RadixThemesFlex align={"start"} className={"rx-Stack w-full"} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"} className={((reflex___state____state__app___app____estado_foro.theme === "light") ? "text-gray-600" : "text-gray-300")}>

{("\ud83d\udcc5 "+post["timestamp"])}
</RadixThemesText>
<RadixThemesFlex css={({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })}/>
<RadixThemesBadge className={"bg-gray-100 text-gray-800"}>

{("Emoci\u00f3n: "+post["emotion"])}
</RadixThemesBadge>
<RadixThemesText as={"p"} className={((reflex___state____state__app___app____estado_foro.theme === "light") ? "text-gray-600" : "text-gray-300")}>

{("\ud83d\udcdd "+post["word_count"]+" palabras")}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
))}</>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesContainer>
</Fragment>
)}
</Fragment>
  )
}

export function Button_15759b7439dd78b421eebd53cfbe102f () {
  
  const reflex___state____state__app___app____estado_foro = useContext(StateContexts.reflex___state____state__app___app____estado_foro)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_daf06dc85b766c2ce60b602f36ed61a1 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.app___app____estado_foro.toggle_sidebar", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    <RadixThemesButton className={(((reflex___state____state__app___app____estado_foro.theme === "light") ? "bg-white text-gray-700 hover:bg-gray-100" : "bg-gray-800 text-white hover:bg-gray-700")+" p-2 rounded-r-lg shadow-lg transition-all duration-300")} css={({ ["position"] : "fixed", ["left"] : (reflex___state____state__app___app____estado_foro.sidebar_open ? "240px" : "0px"), ["top"] : "20px", ["zIndex"] : "1000" })} onClick={on_click_daf06dc85b766c2ce60b602f36ed61a1}>

{(reflex___state____state__app___app____estado_foro.sidebar_open ? "\u25c0" : "\u25b6")}
</RadixThemesButton>
  )
}

export function Box_8e7c47e052d92ed97ca62ecdef2969d5 () {
  
  const reflex___state____state__app___app____estado_foro = useContext(StateContexts.reflex___state____state__app___app____estado_foro)





  
  return (
    <RadixThemesBox css={({ ["marginLeft"] : (reflex___state____state__app___app____estado_foro.sidebar_open ? "240px" : "0px"), ["transition"] : "all 0.3s ease-in-out", ["minHeight"] : "100vh", ["background"] : reflex___state____state__app___app____estado_foro.get_theme_colors["bg"], ["color"] : reflex___state____state__app___app____estado_foro.get_theme_colors["text"] })}>

<Fragment_cc2b9d1910c5d6ed4e2424e79e1bb7f0/>
</RadixThemesBox>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<RadixThemesBox>

<Box_b0df5dfb9e5970c6662b7d65a9c7d0c6/>
<RadixThemesBox>

<Button_15759b7439dd78b421eebd53cfbe102f/>
</RadixThemesBox>
<Box_8e7c47e052d92ed97ca62ecdef2969d5/>
</RadixThemesBox>
<NextHead>

<title>

{"App | Index"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
