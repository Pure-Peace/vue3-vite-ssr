import os
import re
for svg in [file for file in os.listdir(os.getcwd()) if '.svg' in file]:
    file_path = '{}/{}'.format(os.getcwd(), svg)
    with open (file_path, 'r', encoding='utf-8') as svg_file:
        content = svg_file.read()
        target = re.search('fill=".*?"', content)
        if target != None:
            fixed_content = content.replace(target.group(), '')
            with open (file_path, 'w', encoding='utf-8') as svg_file:
                svg_file.write(fixed_content)
            print('done 1')

print('all done')