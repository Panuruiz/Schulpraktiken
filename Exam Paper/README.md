#Objectives:

    1. Semantic markup:
        Create a page structure with the following structure:
        • Header with heading
        • Horizontal navigation bar
          (Links designed with CSS as buttons with rounded corners)
        • Main content
        • Footer

        Create your markup making sensible use of the semantic tags 
        main, header, nav, footer, section, article, aside 
        (not all of these tags have to be used). For a fictitious 
        navigation in nav, please use "dummy links".
        With regard to the design details (colors, fonts, proportions)
         you can let your creativity run free.

    2. Responsive layout:
        Please follow the mobile first principle and create a simple, 
        one-column layout with a responsive image for the markup of your 
        page structure from task 1.

        The mobile layout should have the following properties:
        • The responsive image1 is integrated in the container for 
          the main content. To do this, take three pictures that differ 
          only in size. You specify the size for srcset with the descriptor w. 
          For sizes, please specify that the image should be displayed 
          with a maximum width of 40em across the entire width (100vw) 
          and otherwise to a third of the width (33vw).

        • Please use the file already contained in the boilerplate package 
          in the css subfolder as an external stylesheet.

        • With a larger viewport, the layout should be displayed in two columns, 
          the navigation on the left with the navigation items one below the other, 
          the content area with the image on the right.

    3. Geolocation:
        Please implement a simple geolocation API example in which 
        the geodata for the current location of the user is automatically 
        displayed in an alert window after loading the index.html page. 
        The script required for this is to be swapped out as a function 
        in the boilerplate file provided in the js subfolder.

    4. Link as button:
        Create a link to the jqm.html document defined in the next task. 
        Design this link as a button. In other words, give it a width 
        (please use the CSS property display: inline-block beforehand), 
        define a color gradient and rounded corners. 
        The CSS code is to be transferred to the boilerplate file provided 
        for this purpose. 
        You can add further CSS formatting as you wish, but this is not included 
        in the evaluation.

    5. Two subpages with jQuery Mobile:
        Create another file with the name jqm.html that is independent 
        of the previous page.
        • Link to the JavaScript and CSS files required for jQuery Mobile.
        • Define two "pages" (data-role = "page" elements with unique ids) in jqm.html.
        • The first page should contain at least:
            –A header with a heading of your choice
            –A button that can be used to call up a dialog
            –A list in the actual page content
            -A footer with a heading of your choice

        • The dialog should be located within the second 
          date-role = "page" element. This should contain at least one header.