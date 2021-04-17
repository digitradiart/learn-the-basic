from platform import processor, machine, platform, system

print(platform())
print(platform(1))
print(platform(0, 1))

print(processor())
print(machine())
print(system())