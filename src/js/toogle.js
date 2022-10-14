const skills = document.getElementById('skills')
        const portafolio = document.getElementById('proyectos')
        const contentProyect = document.getElementById('container-proyects')
        const contentSkills = document.getElementById('container-skills')

        skills.addEventListener('click', function(){
        
        contentProyect.classList.add('hidden')
        skills.classList.add('button-select')
        skills.classList.remove('button-unselect')
        portafolio.classList.remove('button-select')
        portafolio.classList.add('button-unselect')
        contentSkills.classList.remove('hidden')
    })
    portafolio.addEventListener('click', function(){
        contentProyect.classList.remove('hidden')
        contentSkills.classList.add('hidden')
        portafolio.classList.add('button-select')
        portafolio.classList.remove('button-unselect')
        skills.classList.remove('button-select')
        skills.classList.add('button-unselect')
    })
