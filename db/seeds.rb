# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

course = Course.create(title: 'Curso de cálculo diferencial', description: 'Este es un curso de cálculo diferencial, para el que deberás conocer FUNCIONES y LÍMITES')

section = Section.create(title: 'Capítulo I', description: 'Repaso de límites' , course: course)

episodes = Episode.create(
    [{title: 'Noción de límite', description: 'Noción intuitiva de límites con ejemplos', section:section, url:'https://www.youtube.com/watch?v=G_wrlQ9Gq_k&'},
    {title: 'Límites por definición', description: 'Definición formal de límites EPSILON-DELTA.', section:section, url:'https://www.youtube.com/watch?v=DnI6m7L08TY'},
    {title: 'Ejericio', description: 'Ejercicio sobre definición formal de límites EPSILON/DELTA', section:section, url:'https://www.youtube.com/watch?v=SQxTgz7UGC0'},
    {title: 'Continuidad', description: 'Definición, explicación y ejemplos de continuidad de funciones', section:section, url:'https://www.youtube.com/watch?v=CQwKdpcXEg4'}]

)