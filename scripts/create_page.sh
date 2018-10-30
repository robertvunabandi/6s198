#!/usr/bin/env bash
# todo - check that both arguments are provided
ASSIGNMENT_NUMBER_STRING=$1
ASSIGNMENT_NUMBER=$2

page_exists() {
    HTML_PAGE_NAME=$1
    # if the file exists, return yes
    if [ ! -e pages/$HTML_PAGE_NAME ]; then
        return 1
    fi
}

HTML_PAGE_NAME="assignment_$ASSIGNMENT_NUMBER_STRING.html"

if page_exists ${HTML_PAGE_NAME}; then
    echo "ERROR: The page ${HTML_PAGE_NAME} has already been created in pages/${HTML_PAGE_NAME}"
    exit
fi

# create the HTML page
JS_FILE_NAME="assignment_$ASSIGNMENT_NUMBER_STRING.js"
echo "Creating pages/${HTML_PAGE_NAME} ..."
touch pages/${HTML_PAGE_NAME}
sed -e "s/\${JS_FILE_NAME}/${JS_FILE_NAME}/" -e "s/\${ASSIGNMENT_NUMBER}/${ASSIGNMENT_NUMBER}/" scripts/html_page_template.txt > pages/${HTML_PAGE_NAME}

# create the JSX file
UPPERCASE_ASSIGNMENT_NUMBER_STRING=$(tr '[:lower:]' '[:upper:]' <<< ${ASSIGNMENT_NUMBER_STRING:0:1})${ASSIGNMENT_NUMBER_STRING:1}
JSX_FILE_NAME="Assignment${UPPERCASE_ASSIGNMENT_NUMBER_STRING}.jsx"
echo
echo "Creating src/${JSX_FILE_NAME} ..."
touch src/${JSX_FILE_NAME}
sed -e "s/\${UPPERCASE_ASSIGNMENT_NUMBER_STRING}/${UPPERCASE_ASSIGNMENT_NUMBER_STRING}/" -e "s/\${ASSIGNMENT_NUMBER}/${ASSIGNMENT_NUMBER}/" scripts/jsx_file_template.txt > src/${JSX_FILE_NAME}

# give next instructions
echo "Page creation completed successfully. Make sure to update webpack.config.js with the new page's information."
echo "Copy the following line into the appropriate webpack.config.js config line:"
echo
echo "assignment_${ASSIGNMENT_NUMBER_STRING}: public_src + \"${JSX_FILE_NAME}\","